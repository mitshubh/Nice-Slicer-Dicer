**Nice-Slicer-Dicer -- An Analyst's Helpline !**

**Description:**
The business analyst's biggest dread, given a dump of semi-structured data and asked to find patterns inside it that could help/point to the company's growth strategy. I know the analysts among you would smile at how optimistic that statement above was. However the grain of truth (or more like a thorn in the flesh?) in it is that often times there's a whole bunch of data with about a 100 dimensions/features (or more) and almost always semi-structured dirty (Dirty here meaning, values that don't have a consistent format across data points for a given column.) data.
The challenge here is two-fold,
A. Cleaning the data into a consistent format.
B. Extract underlying patterns/ correlated variables out of the various dimensions.

**Solution:**
The Application Nice-Slicer-Dicer solves it all !

**Features:**
1. Configurable query builder for a dataset
2. Ability to drill down across multiple (configured) dimensions
3. Ability to Roll-up over multiple (configured) dimensions
4. Ability to configure measures/ quantitative values and apply common (sum, average, etc.) sql functions on them.
5. A GUI for choosing the drill down, roll-up, pivot options and display the plots.

**Instruction to run:**
1) Have a Mongo DB instance running on your system
2) Deploy the Nice-Slicer-Dicer application by running npm start.

**Technology Stack:**
1) The application is built on top of the MEAN Stack.
2) Analytics is provided using pivottable.

**Screenshots:**
Home Page:
![home page](https://github.com/mitshubh/Nice-Slicer-Dicer/blob/master/uploads/home.png)

Heat Map for a data plot:
![analytics page](https://github.com/mitshubh/Nice-Slicer-Dicer/blob/master/uploads/data-analysis.png)