import json
import pandas as pd

with open('../build/json/_metadata.json') as f:
    data = json.load(f)
    
df = pd.json_normalize(data)
attribute_list = df['attributes'].tolist()
trait_list = list()

attr_df = pd.DataFrame()
for image in attribute_list:
    attr_df = attr_df.append(pd.DataFrame(image).T)
    
trait_cols = attr_df.loc['trait_type'][:1].values.tolist()[0]
value_df = attr_df.loc['value'].reset_index(drop=True)
value_df.columns = trait_cols
final_df = pd.concat([df, value_df], axis=1)
final_df = final_df.drop(['description', 'attributes', 'compiler', 'creator'], axis=1)

final_df.to_csv("../build/image_traits.csv", index=False)

occurence_dict = dict()
for col in value_df.columns:
    abc = value_df[col].value_counts().to_dict()
    bcd = value_df[col].value_counts(normalize=True).to_dict()
    ds = [abc, bcd]
    d = {}
    for k in abc.keys():
        d[k] = tuple(d[k] for d in ds)
    occurence_dict[col] = d
    
with open("../build/occurences.json", "w") as outfile:
    json.dump(occurence_dict, outfile)
