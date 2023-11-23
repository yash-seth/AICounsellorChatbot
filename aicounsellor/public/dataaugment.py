import json
import pandas as pd

df = pd.read_json(
    "/Users/vinaymoolya/Desktop/projects/AI_PROJ/aicounsellor/public/data/btech.json")

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

df['IT'] = 250 if df['IT'] == -1 else df['IT']
df['NIRF'] = 250 if df['NIRF'] == -1 else df['NIRF']

print(df)
# df['Score'] = 0.3*(20/df['Id']) + 0.2*df['ROI'] + \
# 0.5((50/df['IT']) + (50/df['NIRF']))

# now we also need to add what exams the students are supposed to write to join that college

# df['NIRF'] = -1
# df['QS'] = -1

# df['IT'] = -1
# print(df)
# # normalisation
# MaxROI = df['ROI'].max()
# MinROI = df['ROI'].min()
# Diff = MaxROI - MinROI

# df['ROI'] = (df['ROI'] - MinROI)/Diff

# # score evaluation - based on type , Rating on different standards , ROI
# df['Score'] = (0.6*df['CTScore'] + 0.2 *
#                (df['Rating']/10) + 0.2*(df['ROI']))*100 + 14

# print(df['Score'].max())
# print(df)

# df.to_json('mtech_final.json', orient='records')
