import json
import pandas as pd

df = pd.read_json(
    "/Users/vinaymoolya/Desktop/projects/AI_PROJ/aicounsellor/public/data/mba.json")

# df.loc[df['Package'] > 5000000, 'Package'] = df['Package']/2

# print(df['Package'])

# df['ROI'] = df['Package']/(df['Fees']*2)


# now we need to add a score according to whether the college is IIT/NIT/Other Reputed Colleges

# IIT - 1
# NIT - 0.75
# Top Private COlleges - 0.5
# Rest - 0.25
# for row in df.rows():
#     if row['IT'] == -1:
#         row['IT'] = 250
#     else:
#         row['IT'] = row['IT']
#     if row['NIRF'] == -1:
#         row['NIRF'] = 250
#     else:
#         row['NIRF'] = row['NIRF']

# df['IT'] = 250 if df['IT'] == -1 else df['IT']
# df['NIRF'] = 250 if df['NIRF'] == -1 else df['NIRF']


# now we also need to add what exams the students are supposed to write to join that college

# df['NIRF'] = -1
# df['QS'] = -1

# df['IT'] = -1
# print(df)
# # normalisation
# MaxROI = df['IT'].max()
# MinROI = df['IT'].min()
# Diff = MaxROI - MinROI

# df['IT'] = (df['IT'] - MinROI)/Diff

# MaxROI = df['NIRF'].max()
# MinROI = df['NIRF'].min()
# Diff = MaxROI - MinROI

# df['NIRF'] = (df['NIRF'] - MinROI)/Diff

# # score evaluation - based on type , Rating on different standards , ROI
# df['Score'] = (0.6*df['CTScore'] + 0.2 *
#                (df['Rating']/10) + 0.2*(df['ROI']))*100 + 14
# df['Score'] = (0.3*(1/df['Id']) + 0.2*df['ROI'] + 0.3 *
#                (((df['IT'].min())/df['IT']) +
#                 ((df['NIRF'].min())/df['NIRF'])) + df['CTScore']*0.2)*100

# df['Score'] = (0.3*(df['Id'].max()-df['Id']) + 0.2*df['ROI'] + 0.3 * (
#                (df['IT'].max() - df['IT']) +
#                (df['NIRF'].max() - df['NIRF'])) + df['CTScore']*0.2)

# df['Score'] = df["Score"] * 100 / df["Score"].max()
# print(df['Score'].max())
# print(df['Score'])
# states = set()
# for i in range(len(df)):
#     df.loc[i, "State"] = df.loc[i, "Location"].split(',')[1]
# # print(states)
# # print(df["State"])
# df.to_json('mtech_final.json', orient='records')
