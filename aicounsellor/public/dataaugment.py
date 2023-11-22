import json
import pandas as pd

df = pd.read_json('./data/mba.json')

# df.loc[df['Package'] > 5000000, 'Package'] = df['Package']/2

# print(df['Package'])

# df['ROI'] = df['Package']/(df['Fees']*2)


# now we need to add a score according to whether the college is IIT/NIT/Other Reputed Colleges

# IIT - 1
# NIT - 0.75
# Top Private COlleges - 0.5
# Rest - 0.25

# df['Score'] = df['Score']-10

# now we also need to add what exams the students are supposed to write to join that college

# df['Exam'] = 'CAT'

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

# df.to_json('mba_final.json', orient='records')
