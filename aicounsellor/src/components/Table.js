import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import "./Table.css";
import { Link } from "react-router-dom";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { Button, Popover, Typography, Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Table = (props) => {
  const data = useContext(DataContext);
  const [feeattr, setFeeAttr] = useState("999999999");
  const [packageAttr, setPackageAttr] = useState("0");
  const [sortattr, setSortAttr] = useState("Id");
  const [loadData, setLoadData] = useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setLoadData(
      data.filter(
        (record) =>
          record.Fees * 4 <= parseInt(feeattr) &&
          record.Package >= parseInt(packageAttr)
      )
    );
  }, [feeattr, packageAttr, data]);

  return (
    <div>
      <div className="filter-container">
        <div className="filter-criteria">
          <div>
            <AttachMoneyRoundedIcon style={{ color: "gold" }} />
          </div>
          <div>
            <span className="attr">Fees</span>
          </div>
          <div>
            <select
              value={feeattr}
              onChange={(e) => setFeeAttr(e.target.value)}
            >
              <option value="999999999">Apply Filter</option>
              <option value="800000">Below 8L</option>
              <option value="1200000">Below 12L</option>
              <option value="3000000"> Below 30L</option>
            </select>
          </div>
        </div>
        <div className="filter-criteria">
          <div>
            <CardGiftcardRoundedIcon style={{ color: "gold" }} />
          </div>
          <div>
            <span className="attr">Avg.Package</span>
          </div>
          <div>
            <select
              value={packageAttr}
              onChange={(e) => setPackageAttr(e.target.value)}
            >
              <option value="0">Apply Filter</option>
              <option value="400000">Above 4L</option>
              <option value="1000000">Above 10L</option>
              <option value="2000000">Above 20L</option>
            </select>
          </div>
        </div>
        <div className="filter-criteria">
          <div>
            <SortRoundedIcon style={{ color: "gold" }} />
          </div>
          <div>
            <span className="attr">Sort By</span>
          </div>
          <div>
            <select
              value={sortattr}
              onChange={(e) => {
                setSortAttr(e.target.value);
              }}
            >
              <option value="Id">Rank</option>
              <option value="Rating">Rating</option>
              <option value="Fees">Fees</option>
              <option value="Package">Package</option>
              <option value="Score">Score</option>
            </select>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table cellSpacing={10} cellPadding={10}>
          <thead>
            <tr className="table-head">
              <th>Rank</th>
              <th>Name</th>
              <th>Location</th>
              <th>Fees</th>
              <th>Package</th>
              <th>Rating</th>
              <th>
                <>
                  <Button onClick={handleOpen}>Score</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Formula for Score Calculation
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <span className="Result">Score</span> = ( 0.3 *
                        <span className="attr1">
                          CDRank.max() - i<sup>th</sup> CDRank
                        </span>{" "}
                        + 0.2 *<span className="attr2">CTScore</span> + 0.2 *
                        <span className="attr3">ROI</span>+ 0.3*
                        <span className="attr4">
                          ((IndiaTodayRank.max() - i<sup>th</sup>{" "}
                          CollegeIndiaTodayRank) + (NIRFRank.max() - i
                          <sup>th</sup> CollegeNIRFRank))
                        </span>{" "}
                        )*100
                      </Typography>
                    </Box>
                  </Modal>
                </>
              </th>
              <th>Exams</th>
              <th>NIRF Rank</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {sortattr === "Id" &&
              loadData
                .sort((a, b) => (a[sortattr] > b[sortattr] ? 1 : -1))
                .map((record) => {
                  return (
                    <tr key={record.Id}>
                      <td>{record.Id}</td>
                      <td>
                        <Link
                          className="links"
                          to={record.SiteLink}
                          target="_blank"
                        >
                          {record.Name}
                        </Link>
                      </td>
                      <td>{record.Location}</td>
                      <td>{record.Fees}</td>
                      <td>{record.Package}</td>
                      <td>{record.Rating}</td>
                      <td>{record.Score}</td>
                      <td>{record.Exam}</td>
                      <td>{record.NIRF}</td>
                      <td>{record.Review}</td>
                    </tr>
                  );
                })}
            {sortattr !== "Id" &&
              loadData
                .sort((a, b) => (a[sortattr] < b[sortattr] ? 1 : -1))
                .map((record) => {
                  return (
                    <tr key={record.Id}>
                      <td>{record.Id}</td>
                      <td>{record.Name}</td>
                      <td>{record.Location}</td>
                      <td>{record.Fees}</td>
                      <td>{record.Package}</td>
                      <td>{record.Rating}</td>
                      <td>{record.Score}</td>
                      <td>{record.Exam}</td>
                      <td>{record.NIRF}</td>
                      <td>{record.Review}</td>
                    </tr>
                  );
                })}
          </tbody>
          <tfoot>
            <tr className="table-foot">
              <td colSpan={8}>&copy; 2023 - AI_PROJ_925</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
