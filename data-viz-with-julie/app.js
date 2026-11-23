import{a as er}from"./chunks/chunk-VBQ3WWG4.js";var pf={id:"foundations",title:"Visualization foundations",subtitle:"Use a synthetic city transit dataset to compare routes, read trends, and investigate relationships and unusual values.",reference:"CPS 5745 Day 01, Visualization introduction. CPS 5745 Day 02, Visualization and analysis in software.",lessons:[{id:"visual-encoding",title:"Visual encoding and comparison",subtitle:"Turn one number per route into a fair comparison.",kind:"bars",slides:[{title:"Choose a mark and a channel",body:"A mark is a visible object such as a bar or dot. An encoding connects a data field to a feature such as position, length, or color. For comparing numerical values, aligned bars let you compare lengths from a common baseline.",example:"Each bar represents one route. Its length represents weekly rides, and its label identifies the route."},{title:"Read the scale before the marks",body:"A zero baseline keeps bar lengths proportional to the values. Labels and units let you check the exact difference after spotting the pattern.",example:"Find the two longest bars, then check their ride counts before deciding how far apart they are."},{title:"Match the quantity to the question",body:"A total answers a question about volume. A rate divides the total by a relevant quantity and answers a different question. Use the same reporting period and units across routes.",example:"Weekly rides answer which route carried the most passengers. Rides per trip would answer which route carried more passengers per scheduled trip."}],quiz:[{prompt:"Which visual feature should represent weekly rides in a bar chart?",options:["Length from a shared baseline","Alphabetical order of route names","The hue assigned to each route"],correct:0,explanation:"Length encodes the ride count on one scale. The route label or color can identify the category."},{prompt:"Which setup makes the ratio between two bar lengths meaningful?",options:["A vertical scale chosen independently for each route","One scale starting at zero","A different bar width for every route"],correct:1,explanation:"When the bars share one zero baseline, the ratio of two bar lengths is the ratio of the values."},{prompt:"The planning team asks which route carried more passengers per scheduled trip. Which measure answers that question?",options:["Weekly rides","Total scheduled trips","Weekly rides divided by weekly scheduled trips"],correct:2,explanation:"Dividing the ride count by the number of trips gives rides per trip. Use counts from the same week."}]},{id:"time-series",title:"Trends and time series",subtitle:"Follow weekly ridership in the order it happened.",kind:"line",slides:[{title:"Let time set the horizontal position",body:"A time series is a sequence of measurements indexed by time. Points show the observations. Connecting them in time order helps you see change from one observation to the next.",example:"Trace the line from its earliest week to its latest, and find where weekly rides rose or fell."},{title:"Separate change from variability",body:"A trend is a sustained direction over the period you inspect. Individual weeks can rise or fall around that direction. Compare several intervals before describing the whole series.",example:"Find one week where the line dips. Check the weeks on both sides to decide whether the dip is brief."},{title:"Keep the observation context visible",body:"Check the date range, interval, and units before comparing series. Use a visible gap for an unobserved week and label the reason if you know it. Use zero only for a week observed to have zero rides.",example:"If a weekly ridership report is missing, the chart should show where the missing measurement belongs."}],quiz:[{prompt:"In what order should a weekly ridership line connect its observations?",options:["Largest ride count first","Alphabetical order by route name","Earliest week to latest week"],correct:2,explanation:"Chronological order preserves the sequence. You can then see what changed between successive weeks."},{prompt:"A line falls one week and then rises again. What should you inspect before concluding ridership is declining?",options:["The direction across the full time window","The color of the line","The total number of route names"],correct:0,explanation:"A single week captures one change. The surrounding observations provide evidence about the longer direction."},{prompt:"A weekly report was never recorded. How should its place in the series appear?",options:["As a measured zero","As a gap marked missing","As an exact copy of the last value"],correct:1,explanation:"A gap preserves the missing week without inventing a count. Zero is reserved for an observed count of zero."}]},{id:"correlation",title:"Scatterplots and correlation",subtitle:"Explore how service frequency and ridership vary together.",kind:"scatter",slides:[{title:"Read the cloud of points",body:"A scatterplot gives each observation two positions from two numeric fields. Inspect direction, shape, spread, and isolated points before summarizing the relationship.",example:"Each dot represents a district with a service frequency and a ridership count. Use the axis labels to read which field is measured on each axis."},{title:"Summarize the linear pattern",body:"Pearson correlation r ranges from -1 to 1 and summarizes the direction and strength of linear association. Values close to zero can still occur along a curved relationship. A fitted line helps you see which observations sit above or below its prediction.",example:"Compare the overall tilt with the spread around it. Inspect any isolated district before drawing conclusions from a fitted line or correlation."},{title:"Turn the view to inspect a third field",body:"A 3D scatterplot uses depth to encode a third numeric field. Rotation changes the viewpoint and can reveal overlapping marks. Each observation keeps the same values while the camera moves.",example:"Use travel time as depth. Return to 2D for a direct comparison of service frequency and ridership."}],quiz:[{prompt:"The points tend to rise from left to right. What does that pattern support?",options:["The measured fields tend to increase together","All districts have the same ridership","Increasing frequency guarantees increased ridership"],correct:0,explanation:"An upward pattern shows positive association in the observed fields. A causal claim needs a separate study design."},{prompt:"What might a clear U-shaped cloud show even when Pearson r is close to zero?",options:["The axes represent the same measurement","A strong positive linear pattern","A nonlinear relationship"],correct:2,explanation:"Pearson r summarizes a straight-line pattern. The opposing directions on either side of a U can cancel in that summary."},{prompt:"What changes when you rotate the 3D scatterplot?",options:["The measured travel times","Your viewpoint and which marks overlap","The district assigned to each observation"],correct:1,explanation:"Rotation changes the projection onto the screen. The service frequency, ridership, and travel time of each district stay fixed."}]},{id:"distributions",title:"Distributions and outliers",subtitle:"Read the spread of delays and investigate unusual observations.",kind:"histogram",slides:[{title:"Group observations into bins",body:"A histogram groups numerical values into adjacent intervals, or bins. In an equal-width count histogram, bar height shows the number of observations in each interval. Bin width can reveal or hide details of the same data.",example:"Compare the intervals with many delays to the sparse right tail. Check each interval boundary before interpreting its count."},{title:"Describe spread with quartiles",body:"The five-number summary gives the minimum, lower quartile Q1, median, upper quartile Q3, and maximum. The interquartile range, Q3 minus Q1, measures the width of the middle half. In a Tukey boxplot, the whiskers reach the most extreme observed values within the fences.",example:"Use Q1 and Q3 to describe the spread of typical delays, then compare it with the full range."},{title:"Use fences to flag observations",body:"Calculate the lower fence as Q1 minus 1.5 times the IQR and the upper fence as Q3 plus 1.5 times the IQR. Values strictly outside either fence are flagged for inspection. Check the record and its context before deciding how to handle it.",example:"Inspect the unusually long delay. Its original record can help you distinguish a service interruption from a data entry error."}],quiz:[{prompt:"What does the height of a bar in an equal-width delay count histogram represent?",options:["The largest delay in the interval","The number of delays in the interval","The route with the longest delay"],correct:1,explanation:"Each observation belongs to one interval. The bar height is the count assigned to that interval."},{prompt:"Which quantity measures the width of the middle half of the delays?",options:["Q3 minus Q1","Maximum minus minimum","Median minus minimum"],correct:0,explanation:"Q1 and Q3 bracket the middle half. Their difference is the interquartile range."},{prompt:"A delay lies above the upper IQR fence. What is the next useful step?",options:["Replace it with the median","Delete it before checking","Inspect the record and its context"],correct:2,explanation:"The fence identifies an unusual observation. Its source and circumstances help you decide how to handle it."}]}]};var mf=[{id:"unit-2",title:"SQL for visualization",subtitle:"Turn rows into reliable summaries before drawing a chart.",reference:"CPS 5745 Day 03, Databases and SQL. CPS 5745 Day 04, SQL aggregations.",lessons:[{id:"sql-group-by",title:"Filter and aggregate rows",subtitle:"Build one comparable chart value for each route.",kind:"bars",slides:[{title:"Know what each row represents",body:"A table can have several records for one route. GROUP BY collects rows with the same key so an aggregate can produce one summary per group. The chosen key determines what one bar represents.",example:"Grouping by route gives one bar per route. Grouping by route and week gives one summary per route in each week."},{title:"Choose a measure with units",body:"SUM adds the measured values, AVG computes the mean of the measured values, and COUNT(*) counts rows. SUM and AVG skip NULL entries. A mean describes the values recorded for the group, so inspect how many observations contributed.",example:"For three records with 20 rides, 40 rides, and a missing count, SUM is 60 rides, AVG is 30 rides per recorded row, and COUNT(*) is 3."},{title:"Filter at the right stage",body:"WHERE limits the input rows before GROUP BY. HAVING keeps or removes a group after its aggregate has been computed. Apply a common reporting period to each group you compare.",example:"Use WHERE to select the reporting week and HAVING SUM(rides) >= 100 to keep groups with at least 100 rides in that week."}],quiz:[{prompt:"You need one bar per route and week. Which grouping gives that level of detail?",options:["GROUP BY route","GROUP BY route, week","GROUP BY rides"],correct:1,explanation:"The route and week together identify each group. Each bar summarizes its own set of records."},{prompt:"Ride observations are 20, 40, and NULL. What is AVG(rides)?",options:["20","60","30"],correct:2,explanation:"AVG divides the total of the two recorded values, 60, by the number of recorded values, 2."},{prompt:"Which clause keeps only routes whose computed total is at least 100?",options:["HAVING SUM(rides) >= 100","WHERE rides >= 100","ORDER BY rides DESC"],correct:0,explanation:"HAVING evaluates the total at the group level. WHERE rides >= 100 would evaluate each input row separately."}]},{id:"sql-time-buckets",title:"Summarize data across time",subtitle:"Choose a reporting interval and show the dates in order.",kind:"line",slides:[{title:"Define reporting intervals",body:"A time bucket groups timestamps into a reporting interval such as a day, week, or month. Decide where the intervals begin, which time zone applies, and which measure each point reports.",example:"Use one consistent definition of a reporting week for all routes. Weekly sums and weekly averages describe different quantities."},{title:"Sort buckets by their dates",body:"Group records using a calendar key such as the start date of the interval. Order the query result by that key before drawing the line. A display label can be formatted separately.",example:"Use the date 2026-02-01 as a February bucket key. You can display it as Feb 2026 while preserving its position in the yearly sequence."},{title:"Check what a missing bucket means",body:"A bucket with no input records may be absent from the query result. Compare the result with the expected calendar to expose unobserved intervals. When a record establishes a count of zero, the chart can show zero.",example:"Use a gap when the April report is missing. Compare several complete intervals before interpreting a change in totals."}],quiz:[{prompt:"A chart connects monthly totals in alphabetical order by month name. What should change?",options:["Sort by the date of each month start","Sort by the largest total","Use a brighter palette"],correct:0,explanation:"A date key orders the intervals chronologically, including intervals from different years."},{prompt:"The June reporting file never arrived. What should the chart show at June?",options:["Zero rides","A gap marked missing","A repeat of May\u2019s total"],correct:1,explanation:"A missing report supplies no ride count. Mark the absent interval so viewers can distinguish it from an observed zero."},{prompt:"Why can a monthly ride total be higher in a longer month even when rides per day are stable?",options:["Sorting changes the total","A longer month always has a higher average","The total adds more days of rides"],correct:2,explanation:"A total depends on the number of days as well as the typical daily count. A daily rate answers a separate comparison question."}]}]},{id:"unit-3",title:"Interactive web charts",subtitle:"Connect chart controls, visual marks, and the data they display.",reference:"CPS 5745 Day 10, Interactive and dynamic visualization. Day 12, JavaScript events. Days 13\u201317, Web graphics and chart integration.",lessons:[{id:"web-encoding",title:"From events to chart state",subtitle:"Trace how an interaction changes the chart.",kind:"bars",slides:[{title:"Separate values, state, and rendering",body:"The data store contains the measurements. Chart state describes choices such as sort order, filters, and selection. The renderer combines both to decide the marks, positions, and labels you see.",example:"A route can move to another position when the order changes. Its ridership count and route identity remain attached to it."},{title:"Follow the event",body:"A tap, click, or keyboard action can update chart state. Redraw the marks, legend, and readouts from that state so all parts of the view describe the same displayed records.",example:"When a rider selects a route, highlight the matching bar and show the count beside the chart."},{title:"Keep comparisons fair across updates",body:"A stable scale makes it easier to compare the same quantity before and after an interaction. If an interaction changes the scale or unit, update the axis and labels. Use a focusable control or inspectable value alongside pointer interactions.",example:"After sorting the bars, check that the largest value is unchanged and stays on the same length scale."}],quiz:[{prompt:"Sorting the bars by ridership changes which part of the chart?",options:["The count recorded for each route","The reporting period used to collect the data","Each bar\u2019s position in the displayed order"],correct:2,explanation:"Sorting moves the records in the display order. Each observed count continues to belong to the same route."},{prompt:"A filter changes which routes are visible. What should a count next to the chart report?",options:["The number of visible routes in the current selection","The number of bars before the last filter change","The total number of pointer clicks"],correct:0,explanation:"The readout should describe the same selection shown by the chart."},{prompt:"You want a route\u2019s bar length to be comparable before and after a sort. Which choice helps?",options:["Shuffle the colors on every interaction","Keep the same scale and unit","Set a different maximum for each bar"],correct:1,explanation:"A stable scale maps the same quantity to the same length across the two views."}]},{id:"web-linked-selection",title:"Link selection and detail",subtitle:"Use a shared record identity to connect a mark to its values.",kind:"scatter",slides:[{title:"Connect views by record ID",body:"Linked views use a stable record ID to refer to the same observation. Selecting a point can highlight that observation and show its values in a separate readout.",example:"Select a route in the scatterplot and inspect the rides and service frequency for that same route."},{title:"Distinguish selection from filtering",body:"A selection directs attention to one record or group. A filter limits which records are included in the view. A readout for the currently visible group should use the records that pass the filter.",example:"Highlighting one suburban route can leave urban routes visible for context. Filtering to suburban routes changes the population you are inspecting."},{title:"Preserve identity when the view moves",body:"Camera rotations and axis changes can make points overlap or change their screen positions. Link details by data IDs so the selected record stays the same as you inspect another view.",example:"A point can appear farther away in 3D after the camera rotates. Its recorded route values stay fixed."}],quiz:[{prompt:"Which field should link a point to its details after the view rotates?",options:["Its last screen pixel","Its stable record ID","Its distance from the camera"],correct:1,explanation:"A stable ID identifies the same record across different projections."},{prompt:"When you highlight one point and the others remain visible, what operation happened?",options:["The dataset was re-aggregated","All other records were removed by a filter","A record was selected"],correct:2,explanation:"Selection emphasizes a record and can preserve surrounding context."},{prompt:"A view is filtered to routes in one group. Which points describe that group\u2019s spread?",options:["The records that pass the current filter","Every record in the entire dataset","Only the closest point to the pointer"],correct:0,explanation:"The displayed spread should reflect the included records. Compare it with the full view if you want to assess what the filter changed."}]}]},{id:"unit-4",title:"Visual analytics and D3",subtitle:"Test whether a pattern survives a change in how you summarize the data.",reference:"CPS 5745 Day 18, Interactive data analytics. Day 23, D3 data binding. Days 24\u201325, Visual formatting and visual analytics.",lessons:[{id:"analytics-binning",title:"Stress-test a histogram",subtitle:"Vary the bins, check the counts, and record what persists.",kind:"histogram",slides:[{title:"Try another bin width",body:"A histogram summarizes a set of measurements using intervals. A small change in a bin boundary can move observations between neighboring bins. Compare multiple reasonable widths to see which patterns persist.",example:"Check whether the high-delay tail appears at several widths before describing it in a finding."},{title:"Make interval boundaries explicit",body:"For count histograms, each included observation should contribute to exactly one bin. A common rule includes the lower edge and excludes the upper edge, with the final bin including the ending boundary.",example:"If the bins are [0, 5) and [5, 10], a delay of exactly 5 belongs in the second bin. Add the bin counts and compare them with the displayed sample size."},{title:"Record the conditions behind the finding",body:"An exploratory claim is easier to reproduce when you report the dataset, units, filters, interval boundaries, and observed pattern. For comparisons, use the same bin edges and say whether height shows counts or shares.",example:"Report a wider right tail in one group only after comparing both groups on the same minute intervals."}],quiz:[{prompt:"Changing bin width made a small second peak disappear. What is a defensible first conclusion?",options:["The apparent peak is sensitive to the bin choice","The measurements changed","The missing peak proves that the remaining peak is wrong"],correct:0,explanation:"A finding that depends on one set of bin boundaries deserves a closer look. The underlying observations can be the same."},{prompt:"Bins follow [0, 5) and [5, 10]. Which bin receives a value of exactly 5?",options:["The first bin","Both bins","The second bin"],correct:2,explanation:"The first bin excludes 5 at its upper edge. The second includes 5 at its lower edge."},{prompt:"What should the sum of an unweighted count histogram\u2019s bin heights equal?",options:["The width of the data domain","The number of observations assigned to those bins","The largest observation"],correct:1,explanation:"Each assigned observation contributes one count. Check the displayed sample size to catch dropped or double-counted observations."}]},{id:"d3-data-join",title:"Keep marks matched to records",subtitle:"Follow D3\u2019s enter, update, and exit steps as the data changes.",kind:"bars",slides:[{title:"Bind each record by a stable key",body:"A D3 data join pairs incoming records with existing marks. A unique key such as route ID lets a mark retain its record when the new array is sorted differently.",example:"For bars representing routes, selection.data(rows, row => row.routeId) matches each bar by route ID."},{title:"Follow enter, update, and exit",body:"Incoming keys without marks enter. Keys present in both sets update. Old keys absent from the incoming data exit. A filter can trigger these steps even when the original dataset stays the same.",example:"If the visible routes change from A and B to B and C, A exits, B updates, and C enters."},{title:"Decide which attributes should change",body:"When a record stays in the chart, its visual attributes may still need recomputing. Update the mark\u2019s coordinates, size, and labels from the new values and scales. Keep the motion consistent with which record changed.",example:"If route B gains riders, its existing bar grows to the new length. A reordered route moves to its new position while retaining its identity."}],quiz:[{prompt:"The route IDs are unchanged, but their order changes. Which key keeps each route linked to its bar?",options:["Current row index","Route ID","Current catchment rank"],correct:1,explanation:"Route ID is stable across the reorder. The index or rank may identify a different route in the new array."},{prompt:"The chart changes from routes A and B to routes B and C. Which route enters?",options:["C","B","A"],correct:0,explanation:"C appears in the incoming set without an existing mark. B updates and A exits."},{prompt:"Route B stays in the chart and its ride count rises. What should happen to the mark?",options:["It should exit and remain absent","It should keep its previous length","It should update its length using the new count"],correct:2,explanation:"The route\u2019s key remains present, so the update changes the existing mark to represent its new value."}]}]}];var gf=[{id:"unit-5",title:"Web requests and live data",subtitle:"Connect a chart to a query, then decide when and how to refresh it.",reference:"CPS 5745 Days 05\u201306, Three-tier websites and HTML forms. Day 09, Authentication and error handling. Days 10 and 17, Real-time visualization and Ajax. Day 26, Automation and APIs",lessons:[{id:"server-query",title:"From an input to a chart query",subtitle:"Follow a filter from the browser to a data service and back.",kind:"bars",slides:[{title:"Give each tier one job",body:"The browser collects a user\u2019s choices and draws the result. The application server validates those choices and decides which data the user can see. The database stores and queries the records.",example:"A route-group control specifies a group. The service returns approved counts for that group with a unit and reporting interval."},{title:"Validate and bind form values",body:"Check that choices match the expected types and ranges on the server. Bind accepted values as query parameters. If the interface lets users choose a grouping or sort field, map that choice to an allowed field name.",example:"A month filter accepts a calendar month. An unexpected value produces a validation message before the service runs the query."},{title:"Show the result state",body:"An empty result, a measured zero, and a failed request mean different things. Include the filter and reporting interval in the returned view. If a refresh fails, label any retained values with their previous timestamp.",example:"If a week has no matching records, show an empty result. A collected record with zero rides can appear as an observed zero."}],quiz:[{prompt:"Which tier should decide whether the current user can see a route\u2019s records?",options:["The application server","The chart axis labels","The selected bar color"],correct:0,explanation:"The application server checks the user\u2019s permissions before it returns records to the browser."},{prompt:"A month value comes from a form. How should the server include the value in a query?",options:["Append the raw input to the query string","Validate it and pass it as a bound parameter","Require the database to infer it from the chart title"],correct:1,explanation:"Validation enforces the input contract. A bound parameter passes the accepted value separately from the query structure."},{prompt:"A request failed and the chart still shows its last successful result. What should appear beside those values?",options:["The latest requested interval as if it succeeded","An observed zero for every route","A failed-refresh message and the time of the retained data"],correct:2,explanation:"The message explains the request outcome. The prior timestamp tells viewers when the displayed values were last obtained."}]},{id:"live-refresh",title:"Refresh data over time",subtitle:"Distinguish a new observation from the arrival of its report.",kind:"line",slides:[{title:"Choose a refresh schedule",body:"A browser can pull snapshots on a timer or receive pushed updates. A scheduled server job can build a shared snapshot at a known interval. Match the update frequency to how often measurements arrive and how soon viewers need them.",example:"A daily planning chart can use a scheduled daily summary. A short-window service monitor may need a more frequent source."},{title:"Order by observation time",body:"A record can arrive after newer records were already displayed. Use its observation timestamp to place it on the chart. Report freshness separately so a delayed arrival does not look like a newly measured event.",example:"A report received at 10:14 for a 10:00 observation belongs at 10:00 on the time axis."},{title:"Handle overlaps and missing updates",body:"A slow request can finish after a newer request. Track data versions or request IDs before updating the visible state. Preserve meaningful gaps when a time interval has no observation.",example:"If snapshot 4 finishes after snapshot 5, a version check keeps the view on snapshot 5. A missed interval can remain a gap."}],quiz:[{prompt:"A measurement observed at 10:00 reaches the service at 10:14. Where does it belong on an observation-time chart?",options:["At 10:14","At the latest available mark","At 10:00"],correct:2,explanation:"The horizontal position encodes when the event was measured. The arrival time is useful freshness metadata."},{prompt:"Snapshot 4 finishes after the chart already rendered snapshot 5. Which action preserves the latest data?",options:["Keep snapshot 5 by checking response versions","Always render the last response to arrive","Average the two snapshots without checking their intervals"],correct:0,explanation:"Checking the version prevents a late older response from replacing newer data."},{prompt:"A refresh clock ticks, but the source has no new measurement. What can the chart conclude?",options:["The last value was measured again","The interface checked for an update","The measured value fell to zero"],correct:1,explanation:"A timer records an update attempt. A new point requires an observation from the source."}]}]},{id:"unit-6",title:"Python for visual exploration",subtitle:"Prepare tabular data, check the plotted sample, and test a visual interpretation.",reference:"CPS 5745 Day 25, Visual analytics and data mining. Day 27, Python, pandas, matplotlib, and GeoPandas. Day 28, Visualization using Python and MySQL",lessons:[{id:"pandas-prep",title:"Prepare a table for plotting",subtitle:"Check types and missing values before drawing the chart.",kind:"bars",slides:[{title:"Check the table\u2019s grain and types",body:"A pandas DataFrame organizes data in rows and columns. Decide what one row means. Inspect column types and parse units and dates before grouping, sorting, or labeling a chart.",example:"A weekly ridership table can use one row per route and week. Convert the count column to a nullable number before calculating a mean."},{title:"Track how missing values affect a statistic",body:"A recorded zero contributes to a total and a mean. An unknown count can be represented as missing. Compare the number of recorded values with the number of rows so the plotted summary has a clear denominator.",example:"Counts 8, 0, and missing give 3 rows, 2 recorded measurements, and a mean of 4 rides per recorded row."},{title:"Plot the prepared table",body:"After cleaning and grouping, send the intended columns to matplotlib. Use the same units on the axis and in the chart caption. Keep the table used to produce the plot so viewers can check the marks.",example:"Plot route name on the category axis and valid ride-count records as bar height. Label an axis in records if the analysis counts observations."}],quiz:[{prompt:'A ridership column contains the strings "16" and "4". What should happen before calculating their numerical mean?',options:["Sort the columns by name","Parse and validate the column as numeric","Choose a bar color for each string"],correct:1,explanation:"Numeric conversion prepares the values for numerical aggregation and exposes entries that fail validation."},{prompt:"Values are 8, 0, and missing. What is their mean using recorded values?",options:["About 2.67","8","4"],correct:2,explanation:"The recorded zero is part of the sample. The sum is 8 and the number of recorded values is 2."},{prompt:"Bar height gives how many route-week rows contain a valid measurement. Which unit describes the vertical axis?",options:["Records","Rides","Weeks per rider"],correct:0,explanation:"This chart counts records. A chart of total rides would sum the measurement values and use a different unit."}]},{id:"visual-mining",title:"Investigate a pattern",subtitle:"Use an interactive plot to refine a question about the data.",kind:"scatter",slides:[{title:"Start with a comparison question",body:"Visual exploration can reveal groups, trends, and unusual observations. Record the fields, sample, and filters so another person can reproduce what you saw. Shape a follow-up test around a specific observation.",example:"Select a point with high ridership and examine its service frequency, ride count, and travel time in the inspector."},{title:"Inspect groups in the same units",body:"Separate plausible groups and compare their patterns using consistent axes. Combinations of groups can create associations that look weaker or different within a group.",example:"Compare a selected route group with the combined view. Keep the same frequency and ridership scales when judging the change."},{title:"Verify before explaining",body:"An apparent cluster can depend on a filter, scale, or projection. Rotate the 3D plot, compare the 2D view, and inspect the original records. A pattern can motivate a check of an explanation.",example:"Rotate to reveal points that overlap in one view. Compare their recorded values before describing them as similar."}],quiz:[{prompt:"After rotation, two points that appeared to overlap separate. What does this tell you?",options:["The underlying ride counts changed","The screen projection hid part of their separation","The dataset gained a record"],correct:1,explanation:"The same 3D data points project differently as the camera moves. Inspect the values to evaluate their differences."},{prompt:"What should you record so someone else can reproduce an exploratory chart result?",options:["Only the chart background color","Only the first point selected","The dataset, fields, units, filters, and observed pattern"],correct:2,explanation:"These details specify the input, the visual encoding, and the conditions behind the observation."},{prompt:"A positive relationship is strong in the combined view but weaker within each route group. What should you check?",options:["How the group populations differ and how the combined pattern changes","Whether rotating the camera changes the underlying observations","Whether using larger dots makes the relationship causal"],correct:0,explanation:"Group composition can influence an aggregate pattern. Compare the groups and identify other variables before proposing an explanation."}]}]}];var bc=[pf,...mf,...gf];function os(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function Zg(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function _f(n){let t,e,i;n.length!==2?(t=os,e=(o,c)=>os(n(o),c),i=(o,c)=>n(o)-c):(t=n===os||n===Zg?n:Jg,e=n,i=n);function r(o,c,l=0,h=o.length){if(l<h){if(t(c,c)!==0)return h;do{let f=l+h>>>1;e(o[f],c)<0?l=f+1:h=f}while(l<h)}return l}function s(o,c,l=0,h=o.length){if(l<h){if(t(c,c)!==0)return h;do{let f=l+h>>>1;e(o[f],c)<=0?l=f+1:h=f}while(l<h)}return l}function a(o,c,l=0,h=o.length){let f=r(o,c,l,h-1);return f>l&&i(o[f-1],c)>-i(o[f],c)?f-1:f}return{left:r,center:a,right:s}}function Jg(){return 0}function xf(n){return n===null?NaN:+n}var yf=_f(os),vf=yf.right,HT=yf.left,WT=_f(xf).center;var qT=bf(Mf),XT=bf(Kg);function bf(n){return function(t,e,i=e){if(!((e=+e)>=0))throw new RangeError("invalid rx");if(!((i=+i)>=0))throw new RangeError("invalid ry");let{data:r,width:s,height:a}=t;if(!((s=Math.floor(s))>=0))throw new RangeError("invalid width");if(!((a=Math.floor(a!==void 0?a:r.length/s))>=0))throw new RangeError("invalid height");if(!s||!a||!e&&!i)return t;let o=e&&n(e),c=i&&n(i),l=r.slice();return o&&c?(nr(o,l,r,s,a),nr(o,r,l,s,a),nr(o,l,r,s,a),ir(c,r,l,s,a),ir(c,l,r,s,a),ir(c,r,l,s,a)):o?(nr(o,r,l,s,a),nr(o,l,r,s,a),nr(o,r,l,s,a)):c&&(ir(c,r,l,s,a),ir(c,l,r,s,a),ir(c,r,l,s,a)),t}}function nr(n,t,e,i,r){for(let s=0,a=i*r;s<a;)n(t,e,s,s+=i,1)}function ir(n,t,e,i,r){for(let s=0,a=i*r;s<i;++s)n(t,e,s,s+a,i)}function Kg(n){let t=Mf(n);return(e,i,r,s,a)=>{r<<=2,s<<=2,a<<=2,t(e,i,r+0,s+0,a),t(e,i,r+1,s+1,a),t(e,i,r+2,s+2,a),t(e,i,r+3,s+3,a)}}function Mf(n){let t=Math.floor(n);if(t===n)return Qg(n);let e=n-t,i=2*n+1;return(r,s,a,o,c)=>{if(!((o-=c)>=a))return;let l=t*s[a],h=c*t,f=h+c;for(let u=a,d=a+h;u<d;u+=c)l+=s[Math.min(o,u)];for(let u=a,d=o;u<=d;u+=c)l+=s[Math.min(o,u+h)],r[u]=(l+e*(s[Math.max(a,u-f)]+s[Math.min(o,u+f)]))/i,l-=s[Math.max(a,u-h)]}}function Qg(n){let t=2*n+1;return(e,i,r,s,a)=>{if(!((s-=a)>=r))return;let o=n*i[r],c=a*n;for(let l=r,h=r+c;l<h;l+=a)o+=i[Math.min(s,l)];for(let l=r,h=s;l<=h;l+=a)o+=i[Math.min(s,l+c)],e[l]=o/t,o-=i[Math.max(r,l-c)]}}var jg=Array.prototype,YT=jg.slice;var t0=Math.sqrt(50),e0=Math.sqrt(10),n0=Math.sqrt(2);function Ra(n,t,e){let i=(t-n)/Math.max(0,e),r=Math.floor(Math.log10(i)),s=i/Math.pow(10,r),a=s>=t0?10:s>=e0?5:s>=n0?2:1,o,c,l;return r<0?(l=Math.pow(10,-r)/a,o=Math.round(n*l),c=Math.round(t*l),o/l<n&&++o,c/l>t&&--c,l=-l):(l=Math.pow(10,r)*a,o=Math.round(n/l),c=Math.round(t/l),o*l<n&&++o,c*l>t&&--c),c<o&&.5<=e&&e<2?Ra(n,t,e*2):[o,c,l]}function Sf(n,t,e){if(t=+t,n=+n,e=+e,!(e>0))return[];if(n===t)return[n];let i=t<n,[r,s,a]=i?Ra(t,n,e):Ra(n,t,e);if(!(s>=r))return[];let o=s-r+1,c=new Array(o);if(i)if(a<0)for(let l=0;l<o;++l)c[l]=(s-l)/-a;else for(let l=0;l<o;++l)c[l]=(s-l)*a;else if(a<0)for(let l=0;l<o;++l)c[l]=(r+l)/-a;else for(let l=0;l<o;++l)c[l]=(r+l)*a;return c}function Ca(n,t,e){return t=+t,n=+n,e=+e,Ra(n,t,e)[2]}function wf(n,t,e){t=+t,n=+n,e=+e;let i=t<n,r=i?Ca(t,n,e):Ca(n,t,e);return(i?-1:1)*(r<0?1/-r:r)}function ls(n,t,e=xf){if(!(!(i=n.length)||isNaN(t=+t))){if(t<=0||i<2)return+e(n[0],0,n);if(t>=1)return+e(n[i-1],i-1,n);var i,r=(i-1)*t,s=Math.floor(r),a=+e(n[s],s,n),o=+e(n[s+1],s+1,n);return a+(o-a)*(r-s)}}function Ia(n,t){let e=0,i=0;if(t===void 0)for(let r of n)r!=null&&(r=+r)>=r&&(++e,i+=r);else{let r=-1;for(let s of n)(s=t(s,++r,n))!=null&&(s=+s)>=s&&(++e,i+=s)}if(e)return i/e}var $T=i0(Math.random);function i0(n){return function(e,i=0,r=e.length){let s=r-(i=+i);for(;s;){let a=n()*s--|0,o=e[s+i];e[s+i]=e[a+i],e[a+i]=o}return e}}function r0(n){return n}var Mc=1,Sc=2,wc=3,cs=4,Tf=1e-6;function s0(n){return"translate("+n+",0)"}function a0(n){return"translate(0,"+n+")"}function o0(n){return t=>+n(t)}function l0(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function c0(){return!this.__axis}function Af(n,t){var e=[],i=null,r=null,s=6,a=6,o=3,c=typeof window<"u"&&window.devicePixelRatio>1?0:.5,l=n===Mc||n===cs?-1:1,h=n===cs||n===Sc?"x":"y",f=n===Mc||n===wc?s0:a0;function u(d){var _=i??(t.ticks?t.ticks.apply(t,e):t.domain()),x=r??(t.tickFormat?t.tickFormat.apply(t,e):r0),m=Math.max(s,0)+o,p=t.range(),M=+p[0]+c,E=+p[p.length-1]+c,v=(t.bandwidth?l0:o0)(t.copy(),c),T=d.selection?d.selection():d,A=T.selectAll(".domain").data([null]),g=T.selectAll(".tick").data(_,t).order(),S=g.exit(),U=g.enter().append("g").attr("class","tick"),P=g.select("line"),F=g.select("text");A=A.merge(A.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),g=g.merge(U),P=P.merge(U.append("line").attr("stroke","currentColor").attr(h+"2",l*s)),F=F.merge(U.append("text").attr("fill","currentColor").attr(h,l*m).attr("dy",n===Mc?"0em":n===wc?"0.71em":"0.32em")),d!==T&&(A=A.transition(d),g=g.transition(d),P=P.transition(d),F=F.transition(d),S=S.transition(d).attr("opacity",Tf).attr("transform",function(D){return isFinite(D=v(D))?f(D+c):this.getAttribute("transform")}),U.attr("opacity",Tf).attr("transform",function(D){var k=this.parentNode.__axis;return f((k&&isFinite(k=k(D))?k:v(D))+c)})),S.remove(),A.attr("d",n===cs||n===Sc?a?"M"+l*a+","+M+"H"+c+"V"+E+"H"+l*a:"M"+c+","+M+"V"+E:a?"M"+M+","+l*a+"V"+c+"H"+E+"V"+l*a:"M"+M+","+c+"H"+E),g.attr("opacity",1).attr("transform",function(D){return f(v(D)+c)}),P.attr(h+"2",l*s),F.attr(h,l*m).text(x),T.filter(c0).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===Sc?"start":n===cs?"end":"middle"),T.each(function(){this.__axis=v})}return u.scale=function(d){return arguments.length?(t=d,u):t},u.ticks=function(){return e=Array.from(arguments),u},u.tickArguments=function(d){return arguments.length?(e=d==null?[]:Array.from(d),u):e.slice()},u.tickValues=function(d){return arguments.length?(i=d==null?null:Array.from(d),u):i&&i.slice()},u.tickFormat=function(d){return arguments.length?(r=d,u):r},u.tickSize=function(d){return arguments.length?(s=a=+d,u):s},u.tickSizeInner=function(d){return arguments.length?(s=+d,u):s},u.tickSizeOuter=function(d){return arguments.length?(a=+d,u):a},u.tickPadding=function(d){return arguments.length?(o=+d,u):o},u.offset=function(d){return arguments.length?(c=+d,u):c},u}function Ef(n){return Af(wc,n)}function Rf(n){return Af(cs,n)}var h0={value:()=>{}};function Tc(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new Pa(e)}function Pa(n){this._=n}function u0(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}Pa.prototype=Tc.prototype={constructor:Pa,on:function(n,t){var e=this._,i=u0(n+"",e),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(n=i[s]).type)&&(r=f0(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(n=i[s]).type)e[r]=Cf(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Cf(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Pa(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function f0(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function Cf(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=h0,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var Ac="http://www.w3.org/1999/xhtml",If={svg:"http://www.w3.org/2000/svg",xhtml:Ac,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function hs(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),If.hasOwnProperty(t)?{space:If[t],local:n}:n}function d0(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Ac&&t.documentElement.namespaceURI===Ac?t.createElement(n):t.createElementNS(e,n)}}function p0(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Pf(n){var t=hs(n);return(t.local?p0:d0)(t)}function m0(){}function La(n){return n==null?m0:function(){return this.querySelector(n)}}function g0(n){typeof n!="function"&&(n=La(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=new Array(a),c,l,h=0;h<a;++h)(c=s[h])&&(l=n.call(c,c.__data__,h,s))&&("__data__"in c&&(l.__data__=c.__data__),o[h]=l);return new nn(i,this._parents)}function _0(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function x0(){return[]}function Rc(n){return n==null?x0:function(){return this.querySelectorAll(n)}}function y0(n){return function(){return _0(n.apply(this,arguments))}}function v0(n){typeof n=="function"?n=y0(n):n=Rc(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var a=t[s],o=a.length,c,l=0;l<o;++l)(c=a[l])&&(i.push(n.call(c,c.__data__,l,a)),r.push(c));return new nn(i,r)}function Cc(n){return function(){return this.matches(n)}}function Nf(n){return function(t){return t.matches(n)}}var b0=Array.prototype.find;function M0(n){return function(){return b0.call(this.children,n)}}function S0(){return this.firstElementChild}function w0(n){return this.select(n==null?S0:M0(typeof n=="function"?n:Nf(n)))}var T0=Array.prototype.filter;function A0(){return Array.from(this.children)}function E0(n){return function(){return T0.call(this.children,n)}}function R0(n){return this.selectAll(n==null?A0:E0(typeof n=="function"?n:Nf(n)))}function C0(n){typeof n!="function"&&(n=Cc(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=[],c,l=0;l<a;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&o.push(c);return new nn(i,this._parents)}function Lf(n){return new Array(n.length)}function I0(){return new nn(this._enter||this._groups.map(Lf),this._parents)}function Na(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Na.prototype={constructor:Na,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function P0(n){return function(){return n}}function N0(n,t,e,i,r,s){for(var a=0,o,c=t.length,l=s.length;a<l;++a)(o=t[a])?(o.__data__=s[a],i[a]=o):e[a]=new Na(n,s[a]);for(;a<c;++a)(o=t[a])&&(r[a]=o)}function L0(n,t,e,i,r,s,a){var o,c,l=new Map,h=t.length,f=s.length,u=new Array(h),d;for(o=0;o<h;++o)(c=t[o])&&(u[o]=d=a.call(c,c.__data__,o,t)+"",l.has(d)?r[o]=c:l.set(d,c));for(o=0;o<f;++o)d=a.call(n,s[o],o,s)+"",(c=l.get(d))?(i[o]=c,c.__data__=s[o],l.delete(d)):e[o]=new Na(n,s[o]);for(o=0;o<h;++o)(c=t[o])&&l.get(u[o])===c&&(r[o]=c)}function D0(n){return n.__data__}function U0(n,t){if(!arguments.length)return Array.from(this,D0);var e=t?L0:N0,i=this._parents,r=this._groups;typeof n!="function"&&(n=P0(n));for(var s=r.length,a=new Array(s),o=new Array(s),c=new Array(s),l=0;l<s;++l){var h=i[l],f=r[l],u=f.length,d=F0(n.call(h,h&&h.__data__,l,i)),_=d.length,x=o[l]=new Array(_),m=a[l]=new Array(_),p=c[l]=new Array(u);e(h,f,x,m,p,d,t);for(var M=0,E=0,v,T;M<_;++M)if(v=x[M]){for(M>=E&&(E=M+1);!(T=m[E])&&++E<_;);v._next=T||null}}return a=new nn(a,i),a._enter=o,a._exit=c,a}function F0(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function O0(){return new nn(this._exit||this._groups.map(Lf),this._parents)}function k0(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function B0(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,a=Math.min(r,s),o=new Array(r),c=0;c<a;++c)for(var l=e[c],h=i[c],f=l.length,u=o[c]=new Array(f),d,_=0;_<f;++_)(d=l[_]||h[_])&&(u[_]=d);for(;c<r;++c)o[c]=e[c];return new nn(o,this._parents)}function z0(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],a;--r>=0;)(a=i[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function V0(n){n||(n=G0);function t(f,u){return f&&u?n(f.__data__,u.__data__):!f-!u}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var a=e[s],o=a.length,c=r[s]=new Array(o),l,h=0;h<o;++h)(l=a[h])&&(c[h]=l);c.sort(t)}return new nn(r,this._parents).order()}function G0(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function H0(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function W0(){return Array.from(this)}function q0(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var a=i[r];if(a)return a}return null}function X0(){let n=0;for(let t of this)++n;return n}function Y0(){return!this.node()}function $0(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,a=r.length,o;s<a;++s)(o=r[s])&&n.call(o,o.__data__,s,r);return this}function Z0(n){return function(){this.removeAttribute(n)}}function J0(n){return function(){this.removeAttributeNS(n.space,n.local)}}function K0(n,t){return function(){this.setAttribute(n,t)}}function Q0(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function j0(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function t_(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function e_(n,t){var e=hs(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?J0:Z0:typeof t=="function"?e.local?t_:j0:e.local?Q0:K0)(e,t))}function Df(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function n_(n){return function(){this.style.removeProperty(n)}}function i_(n,t,e){return function(){this.style.setProperty(n,t,e)}}function r_(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function s_(n,t,e){return arguments.length>1?this.each((t==null?n_:typeof t=="function"?r_:i_)(n,t,e??"")):Ni(this.node(),n)}function Ni(n,t){return n.style.getPropertyValue(t)||Df(n).getComputedStyle(n,null).getPropertyValue(t)}function a_(n){return function(){delete this[n]}}function o_(n,t){return function(){this[n]=t}}function l_(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function c_(n,t){return arguments.length>1?this.each((t==null?a_:typeof t=="function"?l_:o_)(n,t)):this.node()[n]}function Uf(n){return n.trim().split(/^|\s+/)}function Ic(n){return n.classList||new Ff(n)}function Ff(n){this._node=n,this._names=Uf(n.getAttribute("class")||"")}Ff.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Of(n,t){for(var e=Ic(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function kf(n,t){for(var e=Ic(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function h_(n){return function(){Of(this,n)}}function u_(n){return function(){kf(this,n)}}function f_(n,t){return function(){(t.apply(this,arguments)?Of:kf)(this,n)}}function d_(n,t){var e=Uf(n+"");if(arguments.length<2){for(var i=Ic(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?f_:t?h_:u_)(e,t))}function p_(){this.textContent=""}function m_(n){return function(){this.textContent=n}}function g_(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function __(n){return arguments.length?this.each(n==null?p_:(typeof n=="function"?g_:m_)(n)):this.node().textContent}function x_(){this.innerHTML=""}function y_(n){return function(){this.innerHTML=n}}function v_(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function b_(n){return arguments.length?this.each(n==null?x_:(typeof n=="function"?v_:y_)(n)):this.node().innerHTML}function M_(){this.nextSibling&&this.parentNode.appendChild(this)}function S_(){return this.each(M_)}function w_(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function T_(){return this.each(w_)}function A_(n){var t=typeof n=="function"?n:Pf(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function E_(){return null}function R_(n,t){var e=typeof n=="function"?n:Pf(n),i=t==null?E_:typeof t=="function"?t:La(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function C_(){var n=this.parentNode;n&&n.removeChild(this)}function I_(){return this.each(C_)}function P_(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function N_(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function L_(n){return this.select(n?N_:P_)}function D_(n){return arguments.length?this.property("__data__",n):this.node().__data__}function U_(n){return function(t){n.call(this,t,this.__data__)}}function F_(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function O_(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function k_(n,t,e){return function(){var i=this.__on,r,s=U_(t);if(i){for(var a=0,o=i.length;a<o;++a)if((r=i[a]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function B_(n,t,e){var i=F_(n+""),r,s=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var c=0,l=o.length,h;c<l;++c)for(r=0,h=o[c];r<s;++r)if((a=i[r]).type===h.type&&a.name===h.name)return h.value}return}for(o=t?k_:O_,r=0;r<s;++r)this.each(o(i[r],t,e));return this}function Bf(n,t,e){var i=Df(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function z_(n,t){return function(){return Bf(this,n,t)}}function V_(n,t){return function(){return Bf(this,n,t.apply(this,arguments))}}function G_(n,t){return this.each((typeof t=="function"?V_:z_)(n,t))}function*H_(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,a;r<s;++r)(a=i[r])&&(yield a)}var zf=[null];function nn(n,t){this._groups=n,this._parents=t}function Li(){return new nn([[document.documentElement]],zf)}function W_(){return this}nn.prototype=Li.prototype={constructor:nn,select:g0,selectAll:v0,selectChild:w0,selectChildren:R0,filter:C0,data:U0,enter:I0,exit:O0,join:k0,merge:B0,selection:W_,order:z0,sort:V0,call:H0,nodes:W0,node:q0,size:X0,empty:Y0,each:$0,attr:e_,style:s_,property:c_,classed:d_,text:__,html:b_,raise:S_,lower:T_,append:A_,insert:R_,remove:I_,clone:L_,datum:D_,on:B_,dispatch:G_,[Symbol.iterator]:H_};function Vf(n){return typeof n=="string"?new nn([[document.querySelector(n)]],[document.documentElement]):new nn([[n]],zf)}var q_=0;function X_(){return new Ec}function Ec(){this._="@"+(++q_).toString(36)}Ec.prototype=X_.prototype={constructor:Ec,get:function(n){for(var t=this._;!(t in n);)if(!(n=n.parentNode))return;return n[t]},set:function(n,t){return n[this._]=t},remove:function(n){return this._ in n&&delete n[this._]},toString:function(){return this._}};function or(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function ds(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function ci(){}var Oi=.7,ar=1/Oi,rr="\\s*([+-]?\\d+)\\s*",us="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Cn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Y_=/^#([0-9a-f]{3,8})$/,$_=new RegExp(`^rgb\\(${rr},${rr},${rr}\\)$`),Z_=new RegExp(`^rgb\\(${Cn},${Cn},${Cn}\\)$`),J_=new RegExp(`^rgba\\(${rr},${rr},${rr},${us}\\)$`),K_=new RegExp(`^rgba\\(${Cn},${Cn},${Cn},${us}\\)$`),Q_=new RegExp(`^hsl\\(${us},${Cn},${Cn}\\)$`),j_=new RegExp(`^hsla\\(${us},${Cn},${Cn},${us}\\)$`),Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};or(ci,Hn,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Hf,formatHex:Hf,formatHex8:tx,formatHsl:ex,formatRgb:Wf,toString:Wf});function Hf(){return this.rgb().formatHex()}function tx(){return this.rgb().formatHex8()}function ex(){return jf(this).formatHsl()}function Wf(){return this.rgb().formatRgb()}function Hn(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=Y_.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?qf(t):e===3?new Ce(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Da(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Da(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=$_.exec(n))?new Ce(t[1],t[2],t[3],1):(t=Z_.exec(n))?new Ce(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=J_.exec(n))?Da(t[1],t[2],t[3],t[4]):(t=K_.exec(n))?Da(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Q_.exec(n))?$f(t[1],t[2]/100,t[3]/100,1):(t=j_.exec(n))?$f(t[1],t[2]/100,t[3]/100,t[4]):Gf.hasOwnProperty(n)?qf(Gf[n]):n==="transparent"?new Ce(NaN,NaN,NaN,0):null}function qf(n){return new Ce(n>>16&255,n>>8&255,n&255,1)}function Da(n,t,e,i){return i<=0&&(n=t=e=NaN),new Ce(n,t,e,i)}function Fc(n){return n instanceof ci||(n=Hn(n)),n?(n=n.rgb(),new Ce(n.r,n.g,n.b,n.opacity)):new Ce}function ps(n,t,e,i){return arguments.length===1?Fc(n):new Ce(n,t,e,i??1)}function Ce(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}or(Ce,ps,ds(ci,{brighter(n){return n=n==null?ar:Math.pow(ar,n),new Ce(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Oi:Math.pow(Oi,n),new Ce(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Ce(Ui(this.r),Ui(this.g),Ui(this.b),Fa(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xf,formatHex:Xf,formatHex8:nx,formatRgb:Yf,toString:Yf}));function Xf(){return`#${Di(this.r)}${Di(this.g)}${Di(this.b)}`}function nx(){return`#${Di(this.r)}${Di(this.g)}${Di(this.b)}${Di((isNaN(this.opacity)?1:this.opacity)*255)}`}function Yf(){let n=Fa(this.opacity);return`${n===1?"rgb(":"rgba("}${Ui(this.r)}, ${Ui(this.g)}, ${Ui(this.b)}${n===1?")":`, ${n})`}`}function Fa(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ui(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Di(n){return n=Ui(n),(n<16?"0":"")+n.toString(16)}function $f(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new gn(n,t,e,i)}function jf(n){if(n instanceof gn)return new gn(n.h,n.s,n.l,n.opacity);if(n instanceof ci||(n=Hn(n)),!n)return new gn;if(n instanceof gn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),a=NaN,o=s-r,c=(s+r)/2;return o?(t===s?a=(e-i)/o+(e<i)*6:e===s?a=(i-t)/o+2:a=(t-e)/o+4,o/=c<.5?s+r:2-s-r,a*=60):o=c>0&&c<1?0:a,new gn(a,o,c,n.opacity)}function ka(n,t,e,i){return arguments.length===1?jf(n):new gn(n,t,e,i??1)}function gn(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}or(gn,ka,ds(ci,{brighter(n){return n=n==null?ar:Math.pow(ar,n),new gn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Oi:Math.pow(Oi,n),new gn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new Ce(Pc(n>=240?n-240:n+120,r,i),Pc(n,r,i),Pc(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new gn(Zf(this.h),Ua(this.s),Ua(this.l),Fa(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let n=Fa(this.opacity);return`${n===1?"hsl(":"hsla("}${Zf(this.h)}, ${Ua(this.s)*100}%, ${Ua(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Zf(n){return n=(n||0)%360,n<0?n+360:n}function Ua(n){return Math.max(0,Math.min(1,n||0))}function Pc(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}var td=Math.PI/180,ed=180/Math.PI,Oa=18,nd=.96422,id=1,rd=.82521,sd=4/29,sr=6/29,ad=3*sr*sr,ix=sr*sr*sr;function od(n){if(n instanceof In)return new In(n.l,n.a,n.b,n.opacity);if(n instanceof Gn)return cd(n);n instanceof Ce||(n=Fc(n));var t=Uc(n.r),e=Uc(n.g),i=Uc(n.b),r=Nc((.2225045*t+.7168786*e+.0606169*i)/id),s,a;return t===e&&e===i?s=a=r:(s=Nc((.4360747*t+.3850649*e+.1430804*i)/nd),a=Nc((.0139322*t+.0971045*e+.7141733*i)/rd)),new In(116*r-16,500*(s-r),200*(r-a),n.opacity)}function ld(n,t,e,i){return arguments.length===1?od(n):new In(n,t,e,i??1)}function In(n,t,e,i){this.l=+n,this.a=+t,this.b=+e,this.opacity=+i}or(In,ld,ds(ci,{brighter(n){return new In(this.l+Oa*(n??1),this.a,this.b,this.opacity)},darker(n){return new In(this.l-Oa*(n??1),this.a,this.b,this.opacity)},rgb(){var n=(this.l+16)/116,t=isNaN(this.a)?n:n+this.a/500,e=isNaN(this.b)?n:n-this.b/200;return t=nd*Lc(t),n=id*Lc(n),e=rd*Lc(e),new Ce(Dc(3.1338561*t-1.6168667*n-.4906146*e),Dc(-.9787684*t+1.9161415*n+.033454*e),Dc(.0719453*t-.2289914*n+1.4052427*e),this.opacity)}}));function Nc(n){return n>ix?Math.pow(n,1/3):n/ad+sd}function Lc(n){return n>sr?n*n*n:ad*(n-sd)}function Dc(n){return 255*(n<=.0031308?12.92*n:1.055*Math.pow(n,1/2.4)-.055)}function Uc(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function rx(n){if(n instanceof Gn)return new Gn(n.h,n.c,n.l,n.opacity);if(n instanceof In||(n=od(n)),n.a===0&&n.b===0)return new Gn(NaN,0<n.l&&n.l<100?0:NaN,n.l,n.opacity);var t=Math.atan2(n.b,n.a)*ed;return new Gn(t<0?t+360:t,Math.sqrt(n.a*n.a+n.b*n.b),n.l,n.opacity)}function Ba(n,t,e,i){return arguments.length===1?rx(n):new Gn(n,t,e,i??1)}function Gn(n,t,e,i){this.h=+n,this.c=+t,this.l=+e,this.opacity=+i}function cd(n){if(isNaN(n.h))return new In(n.l,0,0,n.opacity);var t=n.h*td;return new In(n.l,Math.cos(t)*n.c,Math.sin(t)*n.c,n.opacity)}or(Gn,Ba,ds(ci,{brighter(n){return new Gn(this.h,this.c,this.l+Oa*(n??1),this.opacity)},darker(n){return new Gn(this.h,this.c,this.l-Oa*(n??1),this.opacity)},rgb(){return cd(this).rgb()}}));var hd=-.14861,Oc=1.78277,kc=-.29227,za=-.90649,fs=1.97294,Jf=fs*za,Kf=fs*Oc,Qf=Oc*kc-za*hd;function sx(n){if(n instanceof Fi)return new Fi(n.h,n.s,n.l,n.opacity);n instanceof Ce||(n=Fc(n));var t=n.r/255,e=n.g/255,i=n.b/255,r=(Qf*i+Jf*t-Kf*e)/(Qf+Jf-Kf),s=i-r,a=(fs*(e-r)-kc*s)/za,o=Math.sqrt(a*a+s*s)/(fs*r*(1-r)),c=o?Math.atan2(a,s)*ed-120:NaN;return new Fi(c<0?c+360:c,o,r,n.opacity)}function Va(n,t,e,i){return arguments.length===1?sx(n):new Fi(n,t,e,i??1)}function Fi(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}or(Fi,Va,ds(ci,{brighter(n){return n=n==null?ar:Math.pow(ar,n),new Fi(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Oi:Math.pow(Oi,n),new Fi(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=isNaN(this.h)?0:(this.h+120)*td,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),i=Math.cos(n),r=Math.sin(n);return new Ce(255*(t+e*(hd*i+Oc*r)),255*(t+e*(kc*i+za*r)),255*(t+e*(fs*i)),this.opacity)}}));function dd(n,t,e,i,r){var s=n*n,a=s*n;return((1-3*n+3*s-a)*t+(4-6*s+3*a)*e+(1+3*n+3*s-3*a)*i+a*r)/6}function ax(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),r=n[i],s=n[i+1],a=i>0?n[i-1]:2*r-s,o=i<t-1?n[i+2]:2*s-r;return dd((e-i/t)*t,a,r,s,o)}}function ox(n){var t=n.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*t),r=n[(i+t-1)%t],s=n[i%t],a=n[(i+1)%t],o=n[(i+2)%t];return dd((e-i/t)*t,r,s,a,o)}}var Ha=n=>()=>n;function pd(n,t){return function(e){return n+e*t}}function lx(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function Gc(n,t){var e=t-n;return e?pd(n,e>180||e<-180?e-360*Math.round(e/360):e):Ha(isNaN(n)?t:n)}function cx(n){return(n=+n)==1?Qe:function(t,e){return e-t?lx(t,e,n):Ha(isNaN(t)?e:t)}}function Qe(n,t){var e=t-n;return e?pd(n,e):Ha(isNaN(n)?t:n)}var ms=(function n(t){var e=cx(t);function i(r,s){var a=e((r=ps(r)).r,(s=ps(s)).r),o=e(r.g,s.g),c=e(r.b,s.b),l=Qe(r.opacity,s.opacity);return function(h){return r.r=a(h),r.g=o(h),r.b=c(h),r.opacity=l(h),r+""}}return i.gamma=n,i})(1);function md(n){return function(t){var e=t.length,i=new Array(e),r=new Array(e),s=new Array(e),a,o;for(a=0;a<e;++a)o=ps(t[a]),i[a]=o.r||0,r[a]=o.g||0,s[a]=o.b||0;return i=n(i),r=n(r),s=n(s),o.opacity=1,function(c){return o.r=i(c),o.g=r(c),o.b=s(c),o+""}}}var eA=md(ax),nA=md(ox);function hx(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,i=t.slice(),r;return function(s){for(r=0;r<e;++r)i[r]=n[r]*(1-s)+t[r]*s;return i}}function ux(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fx(n,t){var e=t?t.length:0,i=n?Math.min(e,n.length):0,r=new Array(i),s=new Array(e),a;for(a=0;a<i;++a)r[a]=Wa(n[a],t[a]);for(;a<e;++a)s[a]=t[a];return function(o){for(a=0;a<i;++a)s[a]=r[a](o);return s}}function dx(n,t){var e=new Date;return n=+n,t=+t,function(i){return e.setTime(n*(1-i)+t*i),e}}function rn(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function px(n,t){var e={},i={},r;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(r in t)r in n?e[r]=Wa(n[r],t[r]):i[r]=t[r];return function(s){for(r in e)i[r]=e[r](s);return i}}var zc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Bc=new RegExp(zc.source,"g");function mx(n){return function(){return n}}function gx(n){return function(t){return n(t)+""}}function Hc(n,t){var e=zc.lastIndex=Bc.lastIndex=0,i,r,s,a=-1,o=[],c=[];for(n=n+"",t=t+"";(i=zc.exec(n))&&(r=Bc.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,c.push({i:a,x:rn(i,r)})),e=Bc.lastIndex;return e<t.length&&(s=t.slice(e),o[a]?o[a]+=s:o[++a]=s),o.length<2?c[0]?gx(c[0].x):mx(t):(t=c.length,function(l){for(var h=0,f;h<t;++h)o[(f=c[h]).i]=f.x(l);return o.join("")})}function Wa(n,t){var e=typeof t,i;return t==null||e==="boolean"?Ha(t):(e==="number"?rn:e==="string"?(i=Hn(t))?(t=i,ms):Hc:t instanceof Hn?ms:t instanceof Date?dx:ux(t)?hx:Array.isArray(t)?fx:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?px:rn)(n,t)}function gd(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}var ud=180/Math.PI,Vc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function _d(n,t,e,i,r,s){var a,o,c;return(a=Math.sqrt(n*n+t*t))&&(n/=a,t/=a),(c=n*e+t*i)&&(e-=n*c,i-=t*c),(o=Math.sqrt(e*e+i*i))&&(e/=o,i/=o,c/=o),n*i<t*e&&(n=-n,t=-t,c=-c,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*ud,skewX:Math.atan(c)*ud,scaleX:a,scaleY:o}}var Ga;function _x(n){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?Vc:_d(t.a,t.b,t.c,t.d,t.e,t.f)}function xx(n){return n==null||(Ga||(Ga=document.createElementNS("http://www.w3.org/2000/svg","g")),Ga.setAttribute("transform",n),!(n=Ga.transform.baseVal.consolidate()))?Vc:(n=n.matrix,_d(n.a,n.b,n.c,n.d,n.e,n.f))}function xd(n,t,e,i){function r(l){return l.length?l.pop()+" ":""}function s(l,h,f,u,d,_){if(l!==f||h!==u){var x=d.push("translate(",null,t,null,e);_.push({i:x-4,x:rn(l,f)},{i:x-2,x:rn(h,u)})}else(f||u)&&d.push("translate("+f+t+u+e)}function a(l,h,f,u){l!==h?(l-h>180?h+=360:h-l>180&&(l+=360),u.push({i:f.push(r(f)+"rotate(",null,i)-2,x:rn(l,h)})):h&&f.push(r(f)+"rotate("+h+i)}function o(l,h,f,u){l!==h?u.push({i:f.push(r(f)+"skewX(",null,i)-2,x:rn(l,h)}):h&&f.push(r(f)+"skewX("+h+i)}function c(l,h,f,u,d,_){if(l!==f||h!==u){var x=d.push(r(d)+"scale(",null,",",null,")");_.push({i:x-4,x:rn(l,f)},{i:x-2,x:rn(h,u)})}else(f!==1||u!==1)&&d.push(r(d)+"scale("+f+","+u+")")}return function(l,h){var f=[],u=[];return l=n(l),h=n(h),s(l.translateX,l.translateY,h.translateX,h.translateY,f,u),a(l.rotate,h.rotate,f,u),o(l.skewX,h.skewX,f,u),c(l.scaleX,l.scaleY,h.scaleX,h.scaleY,f,u),l=h=null,function(d){for(var _=-1,x=u.length,m;++_<x;)f[(m=u[_]).i]=m.x(d);return f.join("")}}}var yd=xd(_x,"px, ","px)","deg)"),vd=xd(xx,", ",")",")"),yx=1e-12;function fd(n){return((n=Math.exp(n))+1/n)/2}function vx(n){return((n=Math.exp(n))-1/n)/2}function bx(n){return((n=Math.exp(2*n))-1)/(n+1)}var iA=(function n(t,e,i){function r(s,a){var o=s[0],c=s[1],l=s[2],h=a[0],f=a[1],u=a[2],d=h-o,_=f-c,x=d*d+_*_,m,p;if(x<yx)p=Math.log(u/l)/t,m=function(g){return[o+g*d,c+g*_,l*Math.exp(t*g*p)]};else{var M=Math.sqrt(x),E=(u*u-l*l+i*x)/(2*l*e*M),v=(u*u-l*l-i*x)/(2*u*e*M),T=Math.log(Math.sqrt(E*E+1)-E),A=Math.log(Math.sqrt(v*v+1)-v);p=(A-T)/t,m=function(g){var S=g*p,U=fd(T),P=l/(e*M)*(U*bx(t*S+T)-vx(T));return[o+P*d,c+P*_,l*U/fd(t*S+T)]}}return m.duration=Math.abs(p)*1e3*t/Math.SQRT2,m}return r.rho=function(s){var a=Math.max(.001,+s),o=a*a,c=o*o;return n(a,o,c)},r})(Math.SQRT2,2,4);function bd(n){return function(t,e){var i=n((t=ka(t)).h,(e=ka(e)).h),r=Qe(t.s,e.s),s=Qe(t.l,e.l),a=Qe(t.opacity,e.opacity);return function(o){return t.h=i(o),t.s=r(o),t.l=s(o),t.opacity=a(o),t+""}}}var rA=bd(Gc),sA=bd(Qe);function Md(n){return function(t,e){var i=n((t=Ba(t)).h,(e=Ba(e)).h),r=Qe(t.c,e.c),s=Qe(t.l,e.l),a=Qe(t.opacity,e.opacity);return function(o){return t.h=i(o),t.c=r(o),t.l=s(o),t.opacity=a(o),t+""}}}var aA=Md(Gc),oA=Md(Qe);function Sd(n){return(function t(e){e=+e;function i(r,s){var a=n((r=Va(r)).h,(s=Va(s)).h),o=Qe(r.s,s.s),c=Qe(r.l,s.l),l=Qe(r.opacity,s.opacity);return function(h){return r.h=a(h),r.s=o(h),r.l=c(Math.pow(h,e)),r.opacity=l(h),r+""}}return i.gamma=t,i})(1)}var lA=Sd(Gc),cA=Sd(Qe);var lr=0,_s=0,gs=0,Td=1e3,qa,xs,Xa=0,ki=0,$a=0,ys=typeof performance=="object"&&performance.now?performance:Date,Ad=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Za(){return ki||(Ad(Mx),ki=ys.now()+$a)}function Mx(){ki=0}function Ya(){this._call=this._time=this._next=null}Ya.prototype=qc.prototype={constructor:Ya,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Za():+e)+(t==null?0:+t),!this._next&&xs!==this&&(xs?xs._next=this:qa=this,xs=this),this._call=n,this._time=e,Wc()},stop:function(){this._call&&(this._call=null,this._time=1/0,Wc())}};function qc(n,t,e){var i=new Ya;return i.restart(n,t,e),i}function Sx(){Za(),++lr;for(var n=qa,t;n;)(t=ki-n._time)>=0&&n._call.call(void 0,t),n=n._next;--lr}function wd(){ki=(Xa=ys.now())+$a,lr=_s=0;try{Sx()}finally{lr=0,Tx(),ki=0}}function wx(){var n=ys.now(),t=n-Xa;t>Td&&($a-=t,Xa=n)}function Tx(){for(var n,t=qa,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:qa=e);xs=n,Wc(i)}function Wc(n){if(!lr){_s&&(_s=clearTimeout(_s));var t=n-ki;t>24?(n<1/0&&(_s=setTimeout(wd,Math.ceil(n-ys.now()-$a)+1)),gs&&(gs=clearInterval(gs))):(gs||(Xa=ys.now(),gs=setInterval(wx,Td)),lr=1,Ad(wd))}}function Xc(n,t,e){var i=new Ya;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}function Rd(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Yc=3,fA=(function n(t){t=+t;function e(i){return Math.pow(i,t)}return e.exponent=n,e})(Yc),dA=(function n(t){t=+t;function e(i){return 1-Math.pow(1-i,t)}return e.exponent=n,e})(Yc),pA=(function n(t){t=+t;function e(i){return((i*=2)<=1?Math.pow(i,t):2-Math.pow(2-i,t))/2}return e.exponent=n,e})(Yc),Ax=Math.PI,mA=Ax/2;function Ja(n){return(Math.pow(2,-10*n)-.0009765625)*1.0009775171065494}var Ed=4/11,gA=6/11,_A=8/11,xA=3/4,yA=9/11,vA=10/11,bA=15/16,MA=21/22,SA=63/64,wA=1/Ed/Ed;var $c=1.70158,TA=(function n(t){t=+t;function e(i){return(i=+i)*i*(t*(i-1)+i)}return e.overshoot=n,e})($c),AA=(function n(t){t=+t;function e(i){return--i*i*((i+1)*t+i)+1}return e.overshoot=n,e})($c),EA=(function n(t){t=+t;function e(i){return((i*=2)<1?i*i*((t+1)*i-t):(i-=2)*i*((t+1)*i+t)+2)/2}return e.overshoot=n,e})($c),cr=2*Math.PI,Zc=1,Jc=.3,RA=(function n(t,e){var i=Math.asin(1/(t=Math.max(1,t)))*(e/=cr);function r(s){return t*Ja(- --s)*Math.sin((i-s)/e)}return r.amplitude=function(s){return n(s,e*cr)},r.period=function(s){return n(t,s)},r})(Zc,Jc),CA=(function n(t,e){var i=Math.asin(1/(t=Math.max(1,t)))*(e/=cr);function r(s){return 1-t*Ja(s=+s)*Math.sin((s+i)/e)}return r.amplitude=function(s){return n(s,e*cr)},r.period=function(s){return n(t,s)},r})(Zc,Jc),IA=(function n(t,e){var i=Math.asin(1/(t=Math.max(1,t)))*(e/=cr);function r(s){return((s=s*2-1)<0?t*Ja(-s)*Math.sin((i-s)/e):2-t*Ja(s)*Math.sin((i+s)/e))/2}return r.amplitude=function(s){return n(s,e*cr)},r.period=function(s){return n(t,s)},r})(Zc,Jc);var Ex=Tc("start","end","cancel","interrupt"),Rx=[],Pd=0,Cd=1,Kc=2,Ka=3,Id=4,Qc=5,Qa=6;function ja(n,t,e,i,r,s){var a=n.__transition;if(!a)n.__transition={};else if(e in a)return;Cx(n,e,{name:t,index:i,group:r,on:Ex,tween:Rx,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Pd})}function jc(n,t){var e=_n(n,t);if(e.state>Pd)throw new Error("too late; already scheduled");return e}function Pn(n,t){var e=_n(n,t);if(e.state>Ka)throw new Error("too late; already running");return e}function _n(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function Cx(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=qc(s,0,e.time);function s(l){e.state=Cd,e.timer.restart(a,e.delay,e.time),e.delay<=l&&a(l-e.delay)}function a(l){var h,f,u,d;if(e.state!==Cd)return c();for(h in i)if(d=i[h],d.name===e.name){if(d.state===Ka)return Xc(a);d.state===Id?(d.state=Qa,d.timer.stop(),d.on.call("interrupt",n,n.__data__,d.index,d.group),delete i[h]):+h<t&&(d.state=Qa,d.timer.stop(),d.on.call("cancel",n,n.__data__,d.index,d.group),delete i[h])}if(Xc(function(){e.state===Ka&&(e.state=Id,e.timer.restart(o,e.delay,e.time),o(l))}),e.state=Kc,e.on.call("start",n,n.__data__,e.index,e.group),e.state===Kc){for(e.state=Ka,r=new Array(u=e.tween.length),h=0,f=-1;h<u;++h)(d=e.tween[h].value.call(n,n.__data__,e.index,e.group))&&(r[++f]=d);r.length=f+1}}function o(l){for(var h=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=Qc,1),f=-1,u=r.length;++f<u;)r[f].call(n,h);e.state===Qc&&(e.on.call("end",n,n.__data__,e.index,e.group),c())}function c(){e.state=Qa,e.timer.stop(),delete i[t];for(var l in i)return;delete n.__transition}}function th(n,t){var e=n.__transition,i,r,s=!0,a;if(e){t=t==null?null:t+"";for(a in e){if((i=e[a]).name!==t){s=!1;continue}r=i.state>Kc&&i.state<Qc,i.state=Qa,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[a]}s&&delete n.__transition}}function Ix(n){return this.each(function(){th(this,n)})}function Px(n,t){var e,i;return function(){var r=Pn(this,n),s=r.tween;if(s!==e){i=e=s;for(var a=0,o=i.length;a<o;++a)if(i[a].name===t){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function Nx(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=Pn(this,n),a=s.tween;if(a!==i){r=(i=a).slice();for(var o={name:t,value:e},c=0,l=r.length;c<l;++c)if(r[c].name===t){r[c]=o;break}c===l&&r.push(o)}s.tween=r}}function Lx(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=_n(this.node(),e).tween,r=0,s=i.length,a;r<s;++r)if((a=i[r]).name===n)return a.value;return null}return this.each((t==null?Px:Nx)(e,n,t))}function eh(n,t,e){var i=n._id;return n.each(function(){var r=Pn(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return _n(r,i).value[t]}}function Nd(n,t){var e;return(typeof t=="number"?rn:t instanceof Hn?ms:(e=Hn(t))?(t=e,ms):Hc)(n,t)}function Dx(n){return function(){this.removeAttribute(n)}}function Ux(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Fx(n,t,e){var i,r=e+"",s;return function(){var a=this.getAttribute(n);return a===r?null:a===i?s:s=t(i=a,e)}}function Ox(n,t,e){var i,r=e+"",s;return function(){var a=this.getAttributeNS(n.space,n.local);return a===r?null:a===i?s:s=t(i=a,e)}}function kx(n,t,e){var i,r,s;return function(){var a,o=e(this),c;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),c=o+"",a===c?null:a===i&&c===r?s:(r=c,s=t(i=a,o)))}}function Bx(n,t,e){var i,r,s;return function(){var a,o=e(this),c;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),c=o+"",a===c?null:a===i&&c===r?s:(r=c,s=t(i=a,o)))}}function zx(n,t){var e=hs(n),i=e==="transform"?vd:Nd;return this.attrTween(n,typeof t=="function"?(e.local?Bx:kx)(e,i,eh(this,"attr."+n,t)):t==null?(e.local?Ux:Dx)(e):(e.local?Ox:Fx)(e,i,t))}function Vx(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function Gx(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function Hx(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&Gx(n,s)),e}return r._value=t,r}function Wx(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&Vx(n,s)),e}return r._value=t,r}function qx(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=hs(n);return this.tween(e,(i.local?Hx:Wx)(i,t))}function Xx(n,t){return function(){jc(this,n).delay=+t.apply(this,arguments)}}function Yx(n,t){return t=+t,function(){jc(this,n).delay=t}}function $x(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?Xx:Yx)(t,n)):_n(this.node(),t).delay}function Zx(n,t){return function(){Pn(this,n).duration=+t.apply(this,arguments)}}function Jx(n,t){return t=+t,function(){Pn(this,n).duration=t}}function Kx(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?Zx:Jx)(t,n)):_n(this.node(),t).duration}function Qx(n,t){if(typeof t!="function")throw new Error;return function(){Pn(this,n).ease=t}}function jx(n){var t=this._id;return arguments.length?this.each(Qx(t,n)):_n(this.node(),t).ease}function ty(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Pn(this,n).ease=e}}function ey(n){if(typeof n!="function")throw new Error;return this.each(ty(this._id,n))}function ny(n){typeof n!="function"&&(n=Cc(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],a=s.length,o=i[r]=[],c,l=0;l<a;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&o.push(c);return new qn(i,this._parents,this._name,this._id)}function iy(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),a=new Array(i),o=0;o<s;++o)for(var c=t[o],l=e[o],h=c.length,f=a[o]=new Array(h),u,d=0;d<h;++d)(u=c[d]||l[d])&&(f[d]=u);for(;o<i;++o)a[o]=t[o];return new qn(a,this._parents,this._name,this._id)}function ry(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function sy(n,t,e){var i,r,s=ry(t)?jc:Pn;return function(){var a=s(this,n),o=a.on;o!==i&&(r=(i=o).copy()).on(t,e),a.on=r}}function ay(n,t){var e=this._id;return arguments.length<2?_n(this.node(),e).on.on(n):this.each(sy(e,n,t))}function oy(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function ly(){return this.on("end.remove",oy(this._id))}function cy(n){var t=this._name,e=this._id;typeof n!="function"&&(n=La(n));for(var i=this._groups,r=i.length,s=new Array(r),a=0;a<r;++a)for(var o=i[a],c=o.length,l=s[a]=new Array(c),h,f,u=0;u<c;++u)(h=o[u])&&(f=n.call(h,h.__data__,u,o))&&("__data__"in h&&(f.__data__=h.__data__),l[u]=f,ja(l[u],t,e,u,l,_n(h,e)));return new qn(s,this._parents,t,e)}function hy(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Rc(n));for(var i=this._groups,r=i.length,s=[],a=[],o=0;o<r;++o)for(var c=i[o],l=c.length,h,f=0;f<l;++f)if(h=c[f]){for(var u=n.call(h,h.__data__,f,c),d,_=_n(h,e),x=0,m=u.length;x<m;++x)(d=u[x])&&ja(d,t,e,x,u,_);s.push(u),a.push(h)}return new qn(s,a,t,e)}var uy=Li.prototype.constructor;function fy(){return new uy(this._groups,this._parents)}function dy(n,t){var e,i,r;return function(){var s=Ni(this,n),a=(this.style.removeProperty(n),Ni(this,n));return s===a?null:s===e&&a===i?r:r=t(e=s,i=a)}}function Ld(n){return function(){this.style.removeProperty(n)}}function py(n,t,e){var i,r=e+"",s;return function(){var a=Ni(this,n);return a===r?null:a===i?s:s=t(i=a,e)}}function my(n,t,e){var i,r,s;return function(){var a=Ni(this,n),o=e(this),c=o+"";return o==null&&(c=o=(this.style.removeProperty(n),Ni(this,n))),a===c?null:a===i&&c===r?s:(r=c,s=t(i=a,o))}}function gy(n,t){var e,i,r,s="style."+t,a="end."+s,o;return function(){var c=Pn(this,n),l=c.on,h=c.value[s]==null?o||(o=Ld(t)):void 0;(l!==e||r!==h)&&(i=(e=l).copy()).on(a,r=h),c.on=i}}function _y(n,t,e){var i=(n+="")=="transform"?yd:Nd;return t==null?this.styleTween(n,dy(n,i)).on("end.style."+n,Ld(n)):typeof t=="function"?this.styleTween(n,my(n,i,eh(this,"style."+n,t))).each(gy(this._id,n)):this.styleTween(n,py(n,i,t),e).on("end.style."+n,null)}function xy(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function yy(n,t,e){var i,r;function s(){var a=t.apply(this,arguments);return a!==r&&(i=(r=a)&&xy(n,a,e)),i}return s._value=t,s}function vy(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,yy(n,t,e??""))}function by(n){return function(){this.textContent=n}}function My(n){return function(){var t=n(this);this.textContent=t??""}}function Sy(n){return this.tween("text",typeof n=="function"?My(eh(this,"text",n)):by(n==null?"":n+""))}function wy(n){return function(t){this.textContent=n.call(this,t)}}function Ty(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&wy(r)),t}return i._value=n,i}function Ay(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,Ty(n))}function Ey(){for(var n=this._name,t=this._id,e=Dd(),i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,c,l=0;l<o;++l)if(c=a[l]){var h=_n(c,t);ja(c,n,e,l,a,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new qn(i,this._parents,n,e)}function Ry(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,a){var o={value:a},c={value:function(){--r===0&&s()}};e.each(function(){var l=Pn(this,i),h=l.on;h!==n&&(t=(n=h).copy(),t._.cancel.push(o),t._.interrupt.push(o),t._.end.push(c)),l.on=t}),r===0&&s()})}var Cy=0;function qn(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function nh(n){return Li().transition(n)}function Dd(){return++Cy}var Wn=Li.prototype;qn.prototype=nh.prototype={constructor:qn,select:cy,selectAll:hy,selectChild:Wn.selectChild,selectChildren:Wn.selectChildren,filter:ny,merge:iy,selection:fy,transition:Ey,call:Wn.call,nodes:Wn.nodes,node:Wn.node,size:Wn.size,empty:Wn.empty,each:Wn.each,on:ay,attr:zx,attrTween:qx,style:_y,styleTween:vy,text:Sy,textTween:Ay,remove:ly,tween:Lx,delay:$x,duration:Kx,ease:jx,easeVarying:ey,end:Ry,[Symbol.iterator]:Wn[Symbol.iterator]};var Iy={time:null,delay:0,duration:250,ease:Rd};function Py(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Ny(n){var t,e;n instanceof qn?(t=n._id,n=n._name):(t=Dd(),(e=Iy).time=Za(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,c,l=0;l<o;++l)(c=a[l])&&ja(c,n,t,l,a,e||Py(c,t));return new qn(i,this._parents,n,t)}Li.prototype.interrupt=Ix;Li.prototype.transition=Ny;var{abs:zA,max:VA,min:GA}=Math;function Ud(n){return[+n[0],+n[1]]}function Ly(n){return[Ud(n[0]),Ud(n[1])]}var HA={name:"x",handles:["w","e"].map(ih),input:function(n,t){return n==null?null:[[+n[0],t[0][1]],[+n[1],t[1][1]]]},output:function(n){return n&&[n[0][0],n[1][0]]}},WA={name:"y",handles:["n","s"].map(ih),input:function(n,t){return n==null?null:[[t[0][0],+n[0]],[t[1][0],+n[1]]]},output:function(n){return n&&[n[0][1],n[1][1]]}},qA={name:"xy",handles:["n","w","e","s","nw","ne","sw","se"].map(ih),input:function(n){return n==null?null:Ly(n)},output:function(n){return n}};function ih(n){return{type:n}}var vs=Math.PI,rh=2*vs,Bi=1e-6,Dy=rh-Bi;function Fd(n){this._+=n[0];for(let t=1,e=n.length;t<e;++t)this._+=arguments[t]+n[t]}function Uy(n){let t=Math.floor(n);if(!(t>=0))throw new Error(`invalid digits: ${n}`);if(t>15)return Fd;let e=10**t;return function(i){this._+=i[0];for(let r=1,s=i.length;r<s;++r)this._+=Math.round(arguments[r]*e)/e+i[r]}}function Od(n,t,e,i){return n===e&&t===i}function Fy(n){let t=Math.floor(n);if(!(t<=15))return Od;let e=10**t,i=function(r){return Math.round(r*e)};return function(r,s,a,o){return i(r)===i(a)&&i(s)===i(o)}}var hr=class{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?Fd:Uy(t),this._equal=t==null?Od:Fy(t)}moveTo(t,e){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,e){this._append`L${this._x1=+t},${this._y1=+e}`}quadraticCurveTo(t,e,i,r){this._append`Q${+t},${+e},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(t,e,i,r,s,a){this._append`C${+t},${+e},${+i},${+r},${this._x1=+s},${this._y1=+a}`}arcTo(t,e,i,r,s){if(t=+t,e=+e,i=+i,r=+r,s=+s,s<0)throw new Error(`negative radius: ${s}`);let a=this._x1,o=this._y1,c=i-t,l=r-e,h=a-t,f=o-e,u=h*h+f*f;if(this._x1===null)this._append`M${this._x1=t},${this._y1=e}`;else if(u>Bi)if(!(Math.abs(f*c-l*h)>Bi)||!s)this._append`L${this._x1=t},${this._y1=e}`;else{let d=i-a,_=r-o,x=c*c+l*l,m=d*d+_*_,p=Math.sqrt(x),M=Math.sqrt(u),E=s*Math.tan((vs-Math.acos((x+u-m)/(2*p*M)))/2),v=E/M,T=E/p;Math.abs(v-1)>Bi&&this._append`L${t+v*h},${e+v*f}`,this._append`A${s},${s},0,0,${+(f*d>h*_)},${this._x1=t+T*c},${this._y1=e+T*l}`}}arc(t,e,i,r,s,a){if(t=+t,e=+e,i=+i,a=!!a,i<0)throw new Error(`negative radius: ${i}`);let o=i*Math.cos(r),c=i*Math.sin(r),l=t+o,h=e+c,f=1^a,u=a?r-s:s-r;if(this._x1===null?this._append`M${l},${h}`:(Math.abs(this._x1-l)>Bi||Math.abs(this._y1-h)>Bi)&&this._append`L${l},${h}`,!!i){if(u<0&&(u=u%rh+rh),u>Dy)this._append`A${i},${i},0,1,${f},${t-o},${e-c}A${i},${i},0,1,${f},${this._x1=l},${this._y1=h}`;else if(u>Bi){let d=t+i*Math.cos(s),_=e+i*Math.sin(s);if(u>=vs&&this._equal(l,h,d,_)){u/=2;let x=r+u;this._append`A${i},${i},0,${+(u>=vs)},${f},${t+i*Math.cos(x)},${e+i*Math.sin(x)}`}this._append`A${i},${i},0,${+(u>=vs)},${f},${this._x1=d},${this._y1=_}`}}}rect(t,e,i,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+e}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}};function Oy(){return new hr}Oy.prototype=hr.prototype;function ky(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function eo(n,t){if(!isFinite(n)||n===0)return null;var e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"),i=n.slice(0,e);return[i.length>1?i[0]+i.slice(2):i,+n.slice(e+1)]}function ur(n){return n=eo(Math.abs(n)),n?n[1]:NaN}function By(n,t){return function(e,i){for(var r=e.length,s=[],a=0,o=n[0],c=0;r>0&&o>0&&(c+o+1>i&&(o=Math.max(1,i-c)),s.push(e.substring(r-=o,r+o)),!((c+=o+1)>i));)o=n[a=(a+1)%n.length];return s.reverse().join(t)}}function zy(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var Vy=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function bs(n){if(!(t=Vy.exec(n)))throw new Error("invalid format: "+n);var t;return new sh({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}bs.prototype=sh.prototype;function sh(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}sh.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Gy(n){t:for(var t=n.length,e=1,i=-1,r;e<t;++e)switch(n[e]){case".":i=r=e;break;case"0":i===0&&(i=e),r=e;break;default:if(!+n[e])break t;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var no;function Hy(n,t){var e=eo(n,t);if(!e)return no=void 0,n.toPrecision(t);var i=e[0],r=e[1],s=r-(no=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return s===a?i:s>a?i+new Array(s-a+1).join("0"):s>0?i.slice(0,s)+"."+i.slice(s):"0."+new Array(1-s).join("0")+eo(n,Math.max(0,t+s-1))[0]}function kd(n,t){var e=eo(n,t);if(!e)return n+"";var i=e[0],r=e[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}var Bd={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:ky,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>kd(n*100,t),r:kd,s:Hy,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function zd(n){return n}var Vd=Array.prototype.map,Gd=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Wy(n){var t=n.grouping===void 0||n.thousands===void 0?zd:By(Vd.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",s=n.numerals===void 0?zd:zy(Vd.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"\u2212":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function l(f,u){f=bs(f);var d=f.fill,_=f.align,x=f.sign,m=f.symbol,p=f.zero,M=f.width,E=f.comma,v=f.precision,T=f.trim,A=f.type;A==="n"?(E=!0,A="g"):Bd[A]||(v===void 0&&(v=12),T=!0,A="g"),(p||d==="0"&&_==="=")&&(p=!0,d="0",_="=");var g=(u&&u.prefix!==void 0?u.prefix:"")+(m==="$"?e:m==="#"&&/[boxX]/.test(A)?"0"+A.toLowerCase():""),S=(m==="$"?i:/[%p]/.test(A)?a:"")+(u&&u.suffix!==void 0?u.suffix:""),U=Bd[A],P=/[defgprs%]/.test(A);v=v===void 0?6:/[gprs]/.test(A)?Math.max(1,Math.min(21,v)):Math.max(0,Math.min(20,v));function F(D){var k=g,C=S,W,Y,H;if(A==="c")C=U(D)+C,D="";else{D=+D;var nt=D<0||1/D<0;if(D=isNaN(D)?c:U(Math.abs(D),v),T&&(D=Gy(D)),nt&&+D==0&&x!=="+"&&(nt=!1),k=(nt?x==="("?x:o:x==="-"||x==="("?"":x)+k,C=(A==="s"&&!isNaN(D)&&no!==void 0?Gd[8+no/3]:"")+C+(nt&&x==="("?")":""),P){for(W=-1,Y=D.length;++W<Y;)if(H=D.charCodeAt(W),48>H||H>57){C=(H===46?r+D.slice(W+1):D.slice(W))+C,D=D.slice(0,W);break}}}E&&!p&&(D=t(D,1/0));var q=k.length+D.length+C.length,Z=q<M?new Array(M-q+1).join(d):"";switch(E&&p&&(D=t(Z+D,Z.length?M-C.length:1/0),Z=""),_){case"<":D=k+D+C+Z;break;case"=":D=k+Z+D+C;break;case"^":D=Z.slice(0,q=Z.length>>1)+k+D+C+Z.slice(q);break;default:D=Z+k+D+C;break}return s(D)}return F.toString=function(){return f+""},F}function h(f,u){var d=Math.max(-8,Math.min(8,Math.floor(ur(u)/3)))*3,_=Math.pow(10,-d),x=l((f=bs(f),f.type="f",f),{suffix:Gd[8+d/3]});return function(m){return x(_*m)}}return{format:l,formatPrefix:h}}var to,ah,oh;qy({thousands:",",grouping:[3],currency:["$",""]});function qy(n){return to=Wy(n),ah=to.format,oh=to.formatPrefix,to}function Hd(n){return Math.max(0,-ur(Math.abs(n)))}function Wd(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ur(t)/3)))*3-ur(Math.abs(n)))}function qd(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,ur(t)-ur(n))+1}function Xy(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function Yy(n){return function(){return n}}function $y(n){return+n}var Xd=[0,1];function fr(n){return n}function lh(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Yy(isNaN(t)?NaN:.5)}function Zy(n,t){var e;return n>t&&(e=n,n=t,t=e),function(i){return Math.max(n,Math.min(t,i))}}function Jy(n,t,e){var i=n[0],r=n[1],s=t[0],a=t[1];return r<i?(i=lh(r,i),s=e(a,s)):(i=lh(i,r),s=e(s,a)),function(o){return s(i(o))}}function Ky(n,t,e){var i=Math.min(n.length,t.length)-1,r=new Array(i),s=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<i;)r[a]=lh(n[a],n[a+1]),s[a]=e(t[a],t[a+1]);return function(o){var c=vf(n,o,1,i)-1;return s[c](r[c](o))}}function Qy(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function jy(){var n=Xd,t=Xd,e=Wa,i,r,s,a=fr,o,c,l;function h(){var u=Math.min(n.length,t.length);return a!==fr&&(a=Zy(n[0],n[u-1])),o=u>2?Ky:Jy,c=l=null,f}function f(u){return u==null||isNaN(u=+u)?s:(c||(c=o(n.map(i),t,e)))(i(a(u)))}return f.invert=function(u){return a(r((l||(l=o(t,n.map(i),rn)))(u)))},f.domain=function(u){return arguments.length?(n=Array.from(u,$y),h()):n.slice()},f.range=function(u){return arguments.length?(t=Array.from(u),h()):t.slice()},f.rangeRound=function(u){return t=Array.from(u),e=gd,h()},f.clamp=function(u){return arguments.length?(a=u?!0:fr,h()):a!==fr},f.interpolate=function(u){return arguments.length?(e=u,h()):e},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,d){return i=u,r=d,h()}}function tv(){return jy()(fr,fr)}function ev(n,t,e,i){var r=wf(n,t,e),s;switch(i=bs(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return i.precision==null&&!isNaN(s=Wd(r,a))&&(i.precision=s),oh(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(s=qd(r,Math.max(Math.abs(n),Math.abs(t))))&&(i.precision=s-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(s=Hd(r))&&(i.precision=s-(i.type==="%")*2);break}}return ah(i)}function nv(n){var t=n.domain;return n.ticks=function(e){var i=t();return Sf(i[0],i[i.length-1],e??10)},n.tickFormat=function(e,i){var r=t();return ev(r[0],r[r.length-1],e??10,i)},n.nice=function(e){e==null&&(e=10);var i=t(),r=0,s=i.length-1,a=i[r],o=i[s],c,l,h=10;for(o<a&&(l=a,a=o,o=l,l=r,r=s,s=l);h-- >0;){if(l=Ca(a,o,e),l===c)return i[r]=a,i[s]=o,t(i);if(l>0)a=Math.floor(a/l)*l,o=Math.ceil(o/l)*l;else if(l<0)a=Math.ceil(a*l)/l,o=Math.floor(o*l)/l;else break;c=l}return n},n}function io(){var n=tv();return n.copy=function(){return Qy(n,io())},Xy.apply(n,arguments),nv(n)}function dr(n){return function(){return n}}var iv=Math.cos;var hh=Math.sin,pr=Math.sqrt,Yd=1e-12,ro=Math.PI,rE=ro/2,Qd=2*ro;function rv(n){let t=3;return n.digits=function(e){if(!arguments.length)return t;if(e==null)t=null;else{let i=Math.floor(e);if(!(i>=0))throw new RangeError(`invalid digits: ${e}`);t=i}return n},()=>new hr(t)}var sE=Array.prototype.slice;function sv(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function jd(n){this._context=n}jd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;default:this._context.lineTo(n,t);break}}};function tp(n){return new jd(n)}function av(n){return n[0]}function ov(n){return n[1]}function ep(n,t){var e=dr(!0),i=null,r=tp,s=null,a=rv(o);n=typeof n=="function"?n:n===void 0?av:dr(n),t=typeof t=="function"?t:t===void 0?ov:dr(t);function o(c){var l,h=(c=sv(c)).length,f,u=!1,d;for(i==null&&(s=r(d=a())),l=0;l<=h;++l)!(l<h&&e(f=c[l],l,c))===u&&((u=!u)?s.lineStart():s.lineEnd()),u&&s.point(+n(f,l,c),+t(f,l,c));if(d)return s=null,d+""||null}return o.x=function(c){return arguments.length?(n=typeof c=="function"?c:dr(+c),o):n},o.y=function(c){return arguments.length?(t=typeof c=="function"?c:dr(+c),o):t},o.defined=function(c){return arguments.length?(e=typeof c=="function"?c:dr(!!c),o):e},o.curve=function(c){return arguments.length?(r=c,i!=null&&(s=r(i)),o):r},o.context=function(c){return arguments.length?(c==null?i=s=null:s=r(i=c),o):i},o}var aE=lv(tp);function np(n){this._curve=n}np.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(n,t){this._curve.point(t*Math.sin(n),t*-Math.cos(n))}};function lv(n){function t(e){return new np(n(e))}return t._curve=n,t}var oE=pr(3);var cv=pr(1/3),lE=cv*2;var ip=hh(ro/10)/hh(7*ro/10),cE=hh(Qd/10)*ip,hE=-iv(Qd/10)*ip;var uE=pr(3);var fE=pr(3);var dE=pr(3)/2,hv=1/pr(12),pE=(hv/2+1)*3;function hi(){}function so(n,t,e){n._context.bezierCurveTo((2*n._x0+n._x1)/3,(2*n._y0+n._y1)/3,(n._x0+2*n._x1)/3,(n._y0+2*n._y1)/3,(n._x0+4*n._x1+t)/6,(n._y0+4*n._y1+e)/6)}function fh(n){this._context=n}fh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:so(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:so(this,n,t);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t}};function uv(n){this._context=n}uv.prototype={areaStart:hi,areaEnd:hi,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._x2=n,this._y2=t;break;case 1:this._point=2,this._x3=n,this._y3=t;break;case 2:this._point=3,this._x4=n,this._y4=t,this._context.moveTo((this._x0+4*this._x1+n)/6,(this._y0+4*this._y1+t)/6);break;default:so(this,n,t);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t}};function fv(n){this._context=n}fv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+n)/6,i=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(e,i):this._context.moveTo(e,i);break;case 3:this._point=4;default:so(this,n,t);break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t}};function rp(n,t){this._basis=new fh(n),this._beta=t}rp.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var n=this._x,t=this._y,e=n.length-1;if(e>0)for(var i=n[0],r=t[0],s=n[e]-i,a=t[e]-r,o=-1,c;++o<=e;)c=o/e,this._basis.point(this._beta*n[o]+(1-this._beta)*(i+c*s),this._beta*t[o]+(1-this._beta)*(r+c*a));this._x=this._y=null,this._basis.lineEnd()},point:function(n,t){this._x.push(+n),this._y.push(+t)}};var mE=(function n(t){function e(i){return t===1?new fh(i):new rp(i,t)}return e.beta=function(i){return n(+i)},e})(.85);function ao(n,t,e){n._context.bezierCurveTo(n._x1+n._k*(n._x2-n._x0),n._y1+n._k*(n._y2-n._y0),n._x2+n._k*(n._x1-t),n._y2+n._k*(n._y1-e),n._x2,n._y2)}function dh(n,t){this._context=n,this._k=(1-t)/6}dh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ao(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2,this._x1=n,this._y1=t;break;case 2:this._point=3;default:ao(this,n,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var gE=(function n(t){function e(i){return new dh(i,t)}return e.tension=function(i){return n(+i)},e})(0);function ph(n,t){this._context=n,this._k=(1-t)/6}ph.prototype={areaStart:hi,areaEnd:hi,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._x3=n,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=n,this._y4=t);break;case 2:this._point=3,this._x5=n,this._y5=t;break;default:ao(this,n,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var _E=(function n(t){function e(i){return new ph(i,t)}return e.tension=function(i){return n(+i)},e})(0);function mh(n,t){this._context=n,this._k=(1-t)/6}mh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ao(this,n,t);break}this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var xE=(function n(t){function e(i){return new mh(i,t)}return e.tension=function(i){return n(+i)},e})(0);function gh(n,t,e){var i=n._x1,r=n._y1,s=n._x2,a=n._y2;if(n._l01_a>Yd){var o=2*n._l01_2a+3*n._l01_a*n._l12_a+n._l12_2a,c=3*n._l01_a*(n._l01_a+n._l12_a);i=(i*o-n._x0*n._l12_2a+n._x2*n._l01_2a)/c,r=(r*o-n._y0*n._l12_2a+n._y2*n._l01_2a)/c}if(n._l23_a>Yd){var l=2*n._l23_2a+3*n._l23_a*n._l12_a+n._l12_2a,h=3*n._l23_a*(n._l23_a+n._l12_a);s=(s*l+n._x1*n._l23_2a-t*n._l12_2a)/h,a=(a*l+n._y1*n._l23_2a-e*n._l12_2a)/h}n._context.bezierCurveTo(i,r,s,a,n._x2,n._y2)}function sp(n,t){this._context=n,this._alpha=t}sp.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){if(n=+n,t=+t,this._point){var e=this._x2-n,i=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;break;case 2:this._point=3;default:gh(this,n,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var yE=(function n(t){function e(i){return t?new sp(i,t):new dh(i,0)}return e.alpha=function(i){return n(+i)},e})(.5);function ap(n,t){this._context=n,this._alpha=t}ap.prototype={areaStart:hi,areaEnd:hi,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(n,t){if(n=+n,t=+t,this._point){var e=this._x2-n,i=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+i*i,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=n,this._y3=t;break;case 1:this._point=2,this._context.moveTo(this._x4=n,this._y4=t);break;case 2:this._point=3,this._x5=n,this._y5=t;break;default:gh(this,n,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var vE=(function n(t){function e(i){return t?new ap(i,t):new ph(i,0)}return e.alpha=function(i){return n(+i)},e})(.5);function op(n,t){this._context=n,this._alpha=t}op.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){if(n=+n,t=+t,this._point){var e=this._x2-n,i=this._y2-t;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+i*i,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:gh(this,n,t);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=n,this._y0=this._y1,this._y1=this._y2,this._y2=t}};var bE=(function n(t){function e(i){return t?new op(i,t):new mh(i,0)}return e.alpha=function(i){return n(+i)},e})(.5);function dv(n){this._context=n}dv.prototype={areaStart:hi,areaEnd:hi,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(n,t){n=+n,t=+t,this._point?this._context.lineTo(n,t):(this._point=1,this._context.moveTo(n,t))}};function $d(n){return n<0?-1:1}function Zd(n,t,e){var i=n._x1-n._x0,r=t-n._x1,s=(n._y1-n._y0)/(i||r<0&&-0),a=(e-n._y1)/(r||i<0&&-0),o=(s*r+a*i)/(i+r);return($d(s)+$d(a))*Math.min(Math.abs(s),Math.abs(a),.5*Math.abs(o))||0}function Jd(n,t){var e=n._x1-n._x0;return e?(3*(n._y1-n._y0)/e-t)/2:t}function ch(n,t,e){var i=n._x0,r=n._y0,s=n._x1,a=n._y1,o=(s-i)/3;n._context.bezierCurveTo(i+o,r+o*t,s-o,a-o*e,s,a)}function uh(n){this._context=n}uh.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:ch(this,this._t0,Jd(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,t){var e=NaN;if(n=+n,t=+t,!(n===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;break;case 2:this._point=3,ch(this,Jd(this,e=Zd(this,n,t)),e);break;default:ch(this,this._t0,e=Zd(this,n,t));break}this._x0=this._x1,this._x1=n,this._y0=this._y1,this._y1=t,this._t0=e}}};function pv(n){this._context=new lp(n)}(pv.prototype=Object.create(uh.prototype)).point=function(n,t){uh.prototype.point.call(this,t,n)};function lp(n){this._context=n}lp.prototype={moveTo:function(n,t){this._context.moveTo(t,n)},closePath:function(){this._context.closePath()},lineTo:function(n,t){this._context.lineTo(t,n)},bezierCurveTo:function(n,t,e,i,r,s){this._context.bezierCurveTo(t,n,i,e,s,r)}};function mv(n){this._context=n}mv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var n=this._x,t=this._y,e=n.length;if(e)if(this._line?this._context.lineTo(n[0],t[0]):this._context.moveTo(n[0],t[0]),e===2)this._context.lineTo(n[1],t[1]);else for(var i=Kd(n),r=Kd(t),s=0,a=1;a<e;++s,++a)this._context.bezierCurveTo(i[0][s],r[0][s],i[1][s],r[1][s],n[a],t[a]);(this._line||this._line!==0&&e===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(n,t){this._x.push(+n),this._y.push(+t)}};function Kd(n){var t,e=n.length-1,i,r=new Array(e),s=new Array(e),a=new Array(e);for(r[0]=0,s[0]=2,a[0]=n[0]+2*n[1],t=1;t<e-1;++t)r[t]=1,s[t]=4,a[t]=4*n[t]+2*n[t+1];for(r[e-1]=2,s[e-1]=7,a[e-1]=8*n[e-1]+n[e],t=1;t<e;++t)i=r[t]/s[t-1],s[t]-=i,a[t]-=i*a[t-1];for(r[e-1]=a[e-1]/s[e-1],t=e-2;t>=0;--t)r[t]=(a[t]-r[t+1])/s[t];for(s[e-1]=(n[e]+r[e-1])/2,t=0;t<e-1;++t)s[t]=2*n[t+1]-r[t+1];return[r,s]}function gv(n,t){this._context=n,this._t=t}gv.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(n,t){switch(n=+n,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,t):this._context.moveTo(n,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(n,t);else{var e=this._x*(1-this._t)+n*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,t)}break}}this._x=n,this._y=t}};function mr(n,t,e){this.k=n,this.x=t,this.y=e}mr.prototype={constructor:mr,scale:function(n){return n===1?this:new mr(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new mr(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var _v=new mr(1,0,0);xv.prototype=mr.prototype;function xv(n){for(;!n.__zoom;)if(!(n=n.parentNode))return _v;return n.__zoom}var yv=new Intl.NumberFormat("en-US",{maximumFractionDigits:1}),gr=new Intl.NumberFormat("en-US",{maximumFractionDigits:0}),je=n=>yv.format(n),_r=["#679521","#7346de","#c23286","#9956d8","#ba632c","#168578"],xh="#df6222",yh=["Blue","Cedar","Elm","Harbor","Linden","Market"],vv=[12940,6820,9690,15120,7940,11770],oo=yh.flatMap((n,t)=>[.21,.25,.23,.31].map((e,i)=>({route:n,week:i+1,mode:t%2?"Express":"Local",riders:Math.round(vv[t]*e)}))),cp=[7770,8230,7920,8780,9140,8790,9580,10350,10030,10890,9680,11200,10790,11960,11530,12570],_h=[2,4,6,7,5,3,4,10,8,5,5,4,8,9,6,3,7,4,6,6,12,5,5,11,4,0,9,7,1,1,8,6,4,5,1,7,6,3,4,5,5,2,7,10,8,3,7,5,6,4,6,5,3,8,11,7,32],hp=Array.from({length:36},(n,t)=>{let e=4+t*11%23+t%3*.45,i=13+t*7%24+t%4*.5;return{id:`district-${t+1}`,x:e,z:i,y:Math.round(440+e*71+t*183%1010-i*12),group:t%3?"City routes":"Outer routes",name:`District ${t+1}`}});hp.push({id:"district-37",x:6,y:3020,z:38,group:"Outer routes",name:"District 37",outlier:!0});var re=(n,t)=>({value:n,label:t}),qe=(n,t,...e)=>({key:n,label:t,options:e}),Xe=(n,t,e,i)=>({label:n,min:t,max:e,ticks:i}),Ye=(n,t,e)=>({label:n,value:t,detail:e}),vh="Synthetic transit data";function bv(n){let t=Ia(n,a=>a.x),e=Ia(n,a=>a.y),i=0,r=0,s=0;for(let{x:a,y:o}of n){let c=a-t,l=o-e;i+=c*l,r+=c*c,s+=l*l}return{r:r>0&&s>0?i/Math.sqrt(r*s):null,slope:r>0?i/r:null,intercept:r>0?e-i/r*t:null}}function Mv(n){let t=[...n].sort((c,l)=>c-l),e=ls(t,.25),i=ls(t,.5),r=ls(t,.75),s=r-e,a=e-1.5*s,o=r+1.5*s;return{min:t[0],q1:e,median:i,q3:r,max:t.at(-1),iqr:s,lower:a,upper:o,outliers:t.filter(c=>c<a||c>o)}}function Sv(n,t){let e=n==="server-query",i=n==="sql-group-by"||e,r=n==="d3-data-join",s=i&&t.mode==="express"?oo.filter(x=>x.mode==="Express"):i&&t.mode==="local"?oo.filter(x=>x.mode==="Local"):oo,a=i?t.metric??"sum":"sum",o=yh.flatMap((x,m)=>{let p=s.filter(E=>E.route===x&&(r?E.week===Number(t.snapshot??"1"):i||E.week===4));if(r&&((t.snapshot??"1")==="4"?m===1:m===5))return[];if(!p.length)return[];let M=p.reduce((E,v)=>E+v.riders,0);return[{name:x,index:m,value:a==="count"?p.length:a==="avg"?M/p.length:M,n:p.length}]});t.sort==="largest"&&o.sort((x,m)=>m.value-x.value);let c=a==="count"?"Records":a==="avg"?"Mean weekly riders":"Riders",l=o.map(({name:x,index:m,value:p,n:M},E)=>({id:x,x:E,y:p,z:0,width:.62,color:_r[m],name:x,label:`${x} route / ${je(p)} ${c.toLowerCase()}`,fields:[["Route",x],[c,je(p)],["Source rows",String(M)]]})),h=o.reduce((x,m)=>x.value>m.value?x:m),f=Math.max(1,...o.map(x=>x.value)),u=a==="count"?5:Math.ceil(f/2e3)*2e3,d=qe("mode","Route group",re("all","All routes"),re("local","Local"),re("express","Express")),_=qe("sort","Arrange",re("route","By route"),re("largest","By value"));return{kind:"bars",keyed:r,title:e?"Ridership after the route filter":i?"Summarize ridership by route":r?"Compare two service snapshots":"Weekly ridership by route",caption:e?"Choose a route group to see the result a validated filter would return for this sample.":i?"Each bar groups route-week rows. Change the summary to see the comparison answer a different question.":r?"Keep route names as stable identifiers when switching snapshots.":"All six routes share a zero baseline. Select a bar to read its exact value.",axisNote:"Bar height encodes value. Depth is unused in this view.",points:l,axes:[Xe("Route",-.6,Math.max(.6,l.length-.4),l.map(x=>({value:x.x,label:x.name}))),Xe(c,0,u),Xe("",-1,1)],controls:e?[d]:i?[qe("metric","Summary",re("sum","Sum of riders"),re("avg","Mean riders"),re("count","Number of records")),d]:r?[qe("snapshot","Snapshot",re("1","Week 1"),re("4","Week 4")),_]:[_],stats:[Ye("Leading route",h.name,`${je(h.value)} ${c.toLowerCase()}`),Ye("Routes shown",String(l.length),"One mark per route"),Ye("Source",vh,r?"Two illustrative snapshots":i?"Four route-week rows per route":"Week 4 for every route")]}}function wv(n,t){let e=n==="sql-time-buckets",i=n==="live-refresh",r=Number(t.bucket??"1"),s=t.window==="8"?8:0,a=cp.slice(s,i?Number(t.cutoff??"16"):cp.length).flatMap((u,d,_)=>{if(d%r!==0)return[];let x=_.slice(d,d+r),m=x.reduce((M,E)=>M+E,0),p=s+d+1;return[{id:`week-${p}`,x:p,y:m,z:0,name:r>1?`Weeks ${p}\u2013${p+x.length-1}`:`Week ${p}`}]}).map(u=>({...u,color:_r[1],label:`${u.name} / ${gr.format(u.y)} riders`,fields:[["Time",u.name],["Riders",gr.format(u.y)]]})),o=a.flatMap((u,d)=>d>=3?[[u.x,Ia(a.slice(d-3,d+1),_=>_.y),0]]:[]),c=Math.max(...a.map(u=>u.y)),l=Math.ceil(c/(r>1?1e4:2e3))*(r>1?1e4:2e3),h=a.at(-1),f=a[0];return{kind:"line",title:i?"Ridership updates over time":e?"Ridership by time bucket":"Weekly ridership",caption:i?"Replay this sample as if weekly snapshots were arriving. Each new point adds recorded data to the same series.":e?"Coarser buckets combine weeks. The total stays fixed when the covered period stays fixed.":"Follow the observations in time order. Compare the raw series with a four-week trailing average.",axisNote:"Horizontal position encodes time. Depth is unused in this view.",points:a,axes:[Xe("Week",f.x,i?16:h.x,i?[1,4,8,12,16]:a.filter((u,d)=>a.length<=8||d%2===0).map(u=>u.x)),Xe(r>1?"Riders per bucket":"Weekly riders",0,i?14e3:l),Xe("",-1,1)],controls:i?[qe("cutoff","As of",re("16","Week 16"),re("13","Week 13"),re("10","Week 10"),re("7","Week 7"))]:e?[qe("bucket","Time grain",re("1","Weekly"),re("4","Four-week totals"))]:[qe("window","Range",re("16","All 16 weeks"),re("8","Recent 8 weeks")),qe("average","Overlay",re("on","Trailing average"),re("off","Raw series only"))],guides:!e&&!i&&t.average!=="off"?[{points:o,color:xh,dash:"5 5"}]:[],stats:[Ye("Latest value",gr.format(h.y),h.name),Ye(e?"Total riders":"Change since first",e?gr.format(a.reduce((u,d)=>u+d.y,0)):`${h.y>=f.y?"+":""}${je(100*(h.y-f.y)/f.y)}%`,e?"Across covered weeks":`${f.name} to ${h.name}`),Ye("Source",vh,`${a.length} plotted observations`)]}}function Tv(n,t){let e=n==="visual-mining",i=n==="web-linked-selection"||e,r=hp.filter(l=>(t.outlier!=="off"||!l.outlier)&&(!i||!t.group||t.group==="All routes"||l.group===t.group)),s=bv(r),a=Math.min(...r.map(l=>l.x)),o=Math.max(...r.map(l=>l.x)),c=r.map(l=>({...l,color:l.outlier?xh:l.group==="City routes"?_r[0]:_r[1],label:`${l.name} / ${je(l.x)} buses per hour, ${gr.format(l.y)} daily riders, ${je(l.z)} minutes`,fields:[["District",l.name],["Buses/hour",je(l.x)],["Daily riders",gr.format(l.y)],["Trip minutes",je(l.z)],["Group",l.group]]}));return{kind:"scatter",title:"Service frequency and daily ridership",caption:e?"Filter a cohort and inspect an unusual district. Use its other fields before interpreting the pattern.":i?"Select a district in either chart or the data table. The inspector follows the same record.":"Each mark is a district. Remove the highlighted point and compare the fitted line and Pearson correlation.",axisNote:"Scatter depth shows average trip time in minutes. The fitted line is drawn in the 2D view.",points:c,axes:[Xe("Buses per hour",0,30),Xe("Daily riders",0,3500),Xe("Trip minutes",10,42)],controls:i?[qe("group","Visible group",re("All routes","All routes"),re("City routes","City routes"),re("Outer routes","Outer routes")),...e?[qe("outlier","High-ridership point",re("on","Included"),re("off","Removed"))]:[]]:[qe("outlier","High-ridership point",re("on","Included"),re("off","Removed")),qe("fit","Trendline",re("on","Show 2D fit"),re("off","Hide fit"))],guides:!i&&t.fit!=="off"&&s.slope!==null?[{points:[[a,s.intercept+s.slope*a,10],[o,s.intercept+s.slope*o,10]],color:"#d26a27",only2D:!0}]:[],stats:[Ye("Pearson r",s.r===null?"Undefined":s.r.toFixed(3),"Service frequency and riders"),Ye("Districts",String(c.length),"One mark per district"),Ye("Source",vh,"Trip time available in 3D")]}}function Av(n){let t=oo.map((a,o)=>({...a,delay:o%5===1||o%8===3?null:_h[o]})),e=n.metric??"all",i=a=>e==="usable"?a.filter(o=>o.delay!==null):e==="missing"?a.filter(o=>o.delay===null):a,r=yh.map((a,o)=>{let c=t.filter(f=>f.route===a),l=c.filter(f=>f.delay===null).length,h=i(c).length;return{id:a,x:o,y:h,z:0,width:.62,name:a,color:_r[o],label:`${a} route / ${h} rows shown, ${l} missing delay readings`,fields:[["Route",a],["Rows shown",h],["Raw rows",c.length],["Missing delays",l]]}}),s=t.filter(a=>a.delay===null).length;return{kind:"bars",title:"Raw and usable rows by route",caption:"Inspect missing delay measurements before grouping. A missing value differs from a recorded zero.",axisNote:"Bar height counts records. Depth is unused in this view.",points:r,axes:[Xe("Route",-.6,5.6,r.map(a=>({value:a.x,label:a.name}))),Xe("Records",0,5,[0,1,2,3,4,5]),Xe("",-1,1)],controls:[qe("metric","Records shown",re("all","All rows"),re("usable","Nonmissing delays"),re("missing","Missing delays"))],stats:[Ye("Raw rows",String(t.length),"Four per route"),Ye("Missing readings",String(s),"Delay field is null"),Ye("Shown rows",String(i(t).length),"Current filter")]}}function Ev(n,t){let e=Number(t.bin??"4"),i=t.outlier==="off"?_h.filter(o=>o!==32):_h,r=Mv(i),s=Math.ceil(33/e)*e,a=[];for(let o=0;o<s;o+=e){let c=o+e,l=i.filter(f=>f>=o&&f<c),h=`${o} to <${c} min`;a.push({id:`bin-${o}`,x:o+e/2,y:l.length,z:0,width:e,name:h,color:l.some(f=>r.outliers.includes(f))?xh:_r[0],label:`${h} / ${l.length} trips`,fields:[["Delay interval",h],["Trips",String(l.length)],["Trip delays",l.length?[...l].sort((f,u)=>f-u).join(", "):"None"]]})}return{kind:"histogram",title:"How late are the trips?",caption:"Each bar counts trips within an interval. Orange bins contain a value beyond a 1.5 \xD7 IQR fence.",axisNote:"Bar height counts trips. Delay is measured in minutes. Depth is unused in this view.",points:a,axes:[Xe("Delay (minutes)",0,s),Xe("Trips",0,Math.ceil(Math.max(...a.map(o=>o.y))/5)*5),Xe("",-1,1)],controls:[qe("bin","Bin width",re("4","4 minutes"),re("2","2 minutes"),re("8","8 minutes")),qe("outlier","Extreme trip",re("on","Included"),re("off","Removed"))],stats:[Ye("Median delay",`${je(r.median)} min`,`${i.length} trips`),Ye("IQR",`${je(r.iqr)} min`,`Q1 ${je(r.q1)} \xB7 Q3 ${je(r.q3)}`),Ye("Beyond fences",String(r.outliers.length),`${je(r.lower)} to ${je(r.upper)} min`)],summary:r}}function up(n,t={}){if(["visual-encoding","sql-group-by","web-encoding","d3-data-join","server-query"].includes(n))return Sv(n,t);if(["time-series","sql-time-buckets","live-refresh"].includes(n))return wv(n,t);if(["correlation","web-linked-selection","visual-mining"].includes(n))return Tv(n,t);if(["distributions","analytics-binning"].includes(n))return Ev(n,t);if(n==="pandas-prep")return Av(t);throw new Error(`No chart for lesson ${n}`)}function fp(n){let t=[...new Set(n.flatMap(e=>e.fields.map(([i])=>i)))];return{columns:t,rows:n.map(e=>{let i=new Map(e.fields);return{id:e.id,cells:t.map(r=>i.get(r)??"")}})}}var ui={ink:"#182942",label:"#4c6079",grid:"#dce7f0",axis:"#a4b8cd",cobalt:"#2779cb",highlight:"#132f53"},Rv=0,bh=new WeakMap;function dp(n){let t=Number.isFinite(n?.min)?n.min:0,e=Number.isFinite(n?.max)?n.max:t+1;return[t,e>t?e:t+1]}function pp(n,t,e,i,r){if(n.ticks(i),!Array.isArray(t?.ticks))return n;let s=t.ticks.map(h=>typeof h=="number"?{value:h}:h).filter(h=>Number.isFinite(h?.value)).sort((h,f)=>h.value-f.value),a=Math.max(1,Math.ceil(r/Math.abs(e(s[1]?.value)-e(s[0]?.value)))||1),o=s.filter((h,f)=>f%a===0),c=new Map(o.filter(h=>h.label!=null).map(h=>[h.value,h.label])),l=e.tickFormat(i);return n.tickValues(o.map(h=>h.value)).tickFormat(h=>c.get(h)??l(h))}function mp(n){n.attr("color",ui.axis),n.selectAll("text").attr("fill",ui.label).attr("font-family","inherit").attr("font-size",11)}function gp(n){n.select(".domain").remove(),n.selectAll("line").attr("stroke",ui.grid),n.attr("pointer-events","none").attr("aria-hidden","true")}function Cv(n){n.replaceChildren();let t=Vf(n).append("svg").attr("width","100%").attr("height","100%").attr("role","group").style("display","block").style("font-family","inherit"),e=t.append("g"),i=`dvj-d3-clip-${++Rv}`,r=t.append("defs").append("clipPath").attr("id",i).append("rect"),s=e.append("g"),a=e.append("g").attr("clip-path",`url(#${i})`),o=a.append("g").attr("aria-hidden","true").attr("pointer-events","none"),c=a.append("g");return{svg:t,plot:e,clip:r,grid:s,guides:o,marks:c,labels:t.append("g")}}function _p(n,t,{onSelect:e,onHover:i}={}){let r=n.contains(document.activeElement)?document.activeElement.getAttribute("data-mark-id"):null,s=t.kind==="bars"&&t.keyed===!0,a=s?bh.get(n):null,o=a?.svg.node().parentNode===n,c=o?a:Cv(n);s?bh.set(n,c):bh.delete(n);let{svg:l,plot:h,clip:f,grid:u,guides:d,marks:_,labels:x}=c,m=Math.max(n.clientWidth,250),p=Math.max(n.clientHeight,280),M={top:16,right:15,bottom:57,left:m<420?61:72},E=m-M.left-M.right,v=p-M.top-M.bottom,[T,A]=t.axes||[],g=dp(T),S=dp(A),U=io().domain(g).range([0,E]),P=io().domain(S).range([v,0]),F=Math.max(2,Math.floor(E/65)),D=Math.max(2,Math.floor(v/57));l.attr("viewBox",`0 0 ${m} ${p}`).attr("aria-label",t.title||"Interactive data chart"),h.attr("transform",`translate(${M.left},${M.top})`),f.attr("x",-2).attr("y",-2).attr("width",E+4).attr("height",v+4),u.selectAll("*").remove();let k=()=>pp(Ef(U),T,U,F,m<420?40:44),C=()=>pp(Rf(P),A,P,D,28);u.append("g").call(C().tickSize(-E).tickFormat("")).call(gp),(t.kind==="scatter"||t.kind==="line")&&u.append("g").attr("transform",`translate(0,${v})`).call(k().tickSize(-v).tickFormat("")).call(gp),u.append("g").attr("transform",`translate(0,${v})`).call(k().tickSizeOuter(0).tickSize(4).tickPadding(8)).call(mp),u.append("g").call(C().tickSizeOuter(0).tickSize(4).tickPadding(7)).call(mp),x.selectAll("*").remove();let W=(et,ot)=>{if(!et)return;let zt=x.append("text").attr("fill",ui.ink).attr("font-size",12).attr("font-weight",650).attr("text-anchor","middle").text(et);for(let[L,G]of Object.entries(ot))zt.attr(L,G)};W(T?.label,{x:M.left+E/2,y:p-11}),W(A?.label,{transform:`translate(15,${M.top+v/2}) rotate(-90)`});let Y=(t.points||[]).filter(et=>Number.isFinite(et.x)&&Number.isFinite(et.y));d.selectAll("*").remove();let H=ep().defined(et=>Number.isFinite(et[0])&&Number.isFinite(et[1])).x(et=>U(et[0])).y(et=>P(et[1]));function nt(et,ot,zt=1,L){d.append("path").attr("d",H(et)).attr("fill","none").attr("stroke",ot||ui.cobalt).attr("stroke-width",2.15).attr("stroke-opacity",zt).attr("stroke-dasharray",Array.isArray(L)?L.join(" "):L??null).attr("stroke-linejoin","round").attr("stroke-linecap","round")}t.kind==="line"&&!t.guides?.length&&nt(Y.map(et=>[et.x,et.y]),Y[0]?.color);for(let et of t.guides||[])nt(et.points,et.color,et.opacity,et.dash);let q=t.kind==="bars"||t.kind==="histogram",Z=P(Math.max(S[0],Math.min(0,S[1]))),it=(g[1]-g[0])*.66/Math.max(new Set(Y.map(et=>et.x)).size,1),Ct,Bt=_.selectAll("g").data(Y,s?et=>et.id:void 0).join(et=>(Ct=et.append("g"),Ct.append("title"),Ct)).attr("data-mark-id",et=>et.id).attr("role","button").attr("tabindex",0).attr("aria-label",et=>et.label).style("cursor","pointer").on("pointerenter focus",(et,ot)=>i?.(ot.id,ot)).on("pointerleave blur",()=>i?.(null)).on("click",(et,ot)=>e?.(ot.id,ot)).on("keydown",(et,ot)=>{(et.key===" "||et.key==="Enter")&&(et.preventDefault(),e?.(ot.id,ot))});Bt.select("title").text(et=>et.label);let J=t.kind==="scatter"?5.6:4.4;if(q){let et=ht=>Number.isFinite(ht.width)&&ht.width>0?ht.width:it,ot=ht=>Math.abs(U(ht.x+et(ht)/2)-U(ht.x-et(ht)/2)),zt=ht=>ht.attr("x",It=>U(It.x)-ot(It)/2).attr("width",ot),L=ht=>Math.min(P(ht.y),Z),G=ht=>Math.abs(P(ht.y)-Z);Ct.append("rect").attr("class","mark-target").attr("fill","transparent").attr("pointer-events","all"),Bt.select(".mark-target").call(zt).attr("y",ht=>G(ht)<10?Math.min(L(ht),v-10):L(ht)).attr("height",ht=>Math.max(10,G(ht))),Ct.append("rect").attr("class","data-mark").call(zt).attr("y",Z).attr("height",0).attr("rx",t.kind==="bars"?3:0);let st=Bt.select(".data-mark").interrupt("bar-layout").attr("fill",ht=>ht.color||ui.cobalt);(o&&!matchMedia("(prefers-reduced-motion: reduce)").matches?st.transition(nh("bar-layout").duration(300)):st).call(zt).attr("y",L).attr("height",G)}else Bt.attr("transform",et=>`translate(${U(et.x)},${P(et.y)})`),Ct.append("circle").attr("r",12).attr("fill","transparent").attr("pointer-events","all"),Ct.append("circle").attr("class","data-mark").attr("r",J).attr("fill",et=>et.color||ui.cobalt);let dt=(et,ot)=>ot!=null&&String(et.id)===String(ot);function Et(et){Bt.attr("aria-pressed",ot=>String(dt(ot,et))).select(".data-mark").attr("stroke",ot=>dt(ot,et)?ui.highlight:q?"none":"#ffffff").attr("stroke-width",ot=>dt(ot,et)?2.4:1.2).attr("vector-effect","non-scaling-stroke"),q||Bt.select(".data-mark").attr("r",ot=>dt(ot,et)?J+1.6:J)}return Et(t.selectedId),r!=null&&Bt.filter(et=>dt(et,r)).node()?.focus({preventScroll:!0}),Et}var wi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kp=0,Qh=1,Qp=2;var aa=1,jp=2,Jr=3,Ai=0,Ue=1,On=2,qi=0,Kr=1,jh=2,tu=3,eu=4,tm=5;var Xi=100,em=101,nm=102,im=103,rm=104,sm=200,am=201,om=202,lm=203,nu=204,iu=205,cm=206,hm=207,um=208,fm=209,dm=210,pm=211,mm=212,gm=213,_m=214,Fo=0,Oo=1,ko=2,Fr=3,Bo=4,zo=5,Vo=6,Go=7,ru=0,xm=1,ym=2,kn=0,su=1,au=2,ou=3,lu=4,cu=5,hu=6,uu=7;var fu=300,Yi=301,Qr=302,ml=303,gl=304,Ho=1e3,Ln=1001,Wo=1002,Pe=1003,vm=1004;var oa=1005;var Je=1006,_l=1007;var ii=1008;var tn=1009,du=1010,pu=1011,jr=1012,xl=1013,Sn=1014,wn=1015,Tn=1016,yl=1017,vl=1018,$i=1020,mu=35902,gu=35899,_u=1021,xu=1022,An=1023,ti=1026,ri=1027,yu=1028,bl=1029,Ei=1030,Ml=1031;var Sl=1033,la=33776,ca=33777,ha=33778,ua=33779,wl=35840,Tl=35841,Al=35842,El=35843,Rl=36196,Cl=37492,Il=37496,Pl=37488,Nl=37489,fa=37490,Ll=37491,Dl=37808,Ul=37809,Fl=37810,Ol=37811,kl=37812,Bl=37813,zl=37814,Vl=37815,Gl=37816,Hl=37817,Wl=37818,ql=37819,Xl=37820,Yl=37821,$l=36492,Zl=36494,Jl=36495,Kl=36283,Ql=36284,da=36285,jl=36286;var Ls=2300,qo=2301,Do=2302,Wh=2303,qh=2400,Xh=2401,Yh=2402;var bm=3200;var tc=0,Mm=1,si="",Ve="srgb",Ds="srgb-linear",Us="linear",de="srgb";var Uo=7680;var Sm=519,wm=512,Tm=513,Am=514,vu=515,Em=516,Rm=517,bu=518,Mu=519,Su=35044;var wu="300 es",pn=2e3,Or=2001;function Iv(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cm(){let n=Fs("canvas");return n.style.display="block",n}var xp={},kr=null;function Os(...n){let t="THREE."+n.shift();kr?kr("log",t,...n):console.log(t,...n)}function Im(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=Im(n);let t="THREE."+n.shift();if(kr)kr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=Im(n);let t="THREE."+n.shift();if(kr)kr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Is(...n){let t=n.join(" ");t in xp||(xp[t]=!0,qt(...n))}function Pm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Nm={[Fo]:Fo,[ko]:Vo,[Bo]:Bo,[Fr]:zo,[Oo]:Oo,[Vo]:ko,[Go]:Go,[zo]:Fr},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yp=1234567,Ps=Math.PI/180,Br=180/Math.PI;function Ri(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function Tu(n,t){return(n%t+t)%t}function Nv(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Lv(n,t,e){return n!==t?(e-n)/(t-n):0}function Ns(n,t,e){return(1-e)*n+e*t}function Dv(n,t,e,i){return Ns(n,t,1-Math.exp(-e*i))}function Uv(n,t=1){return t-Math.abs(Tu(n,t*2)-t)}function Fv(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ov(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function kv(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Bv(n,t){return n+Math.random()*(t-n)}function zv(n){return n*(.5-Math.random())}function Vv(n){n!==void 0&&(yp=n);let t=yp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gv(n){return n*Ps}function Hv(n){return n*Br}function Wv(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function qv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Au(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xv(n,t,e,i,r){let s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+i)/2),h=a((t+i)/2),f=s((t-i)/2),u=a((t-i)/2),d=s((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":n.set(o*h,c*f,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*d,o*l);break;case"YXY":n.set(c*d,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*d,o*h,o*l);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ec(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Eu(n,t){if(t.constructor===Float32Array)return n;let e=ec(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Ru(n,t){if(t.constructor===Float32Array)return n;let e=ec(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Cu={DEG2RAD:Ps,RAD2DEG:Br,generateUUID:Ri,clamp:ie,euclideanModulo:Tu,mapLinear:Nv,inverseLerp:Lv,lerp:Ns,damp:Dv,pingpong:Uv,smoothstep:Fv,smootherstep:Ov,randInt:kv,randFloat:Bv,randFloatSpread:zv,seededRandom:Vv,degToRad:Gv,radToDeg:Hv,isPowerOfTwo:Wv,ceilPowerOfTwo:qv,floorPowerOfTwo:Au,setQuaternionFromProperEuler:Xv,normalize:Ru,denormalize:Eu},Gt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],d=s[a+1],_=s[a+2],x=s[a+3];if(f!==x||c!==u||l!==d||h!==_){let m=c*u+l*d+h*_+f*x;m<0&&(u=-u,d=-d,_=-_,x=-x,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+u*o,l=l*p+d*o,h=h*p+_*o,f=f*p+x*o}else{c=c*p+u*o,l=l*p+d*o,h=h*p+_*o,f=f*p+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){let o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*f+c*d-l*u,t[e+1]=c*_+h*u+l*f-o*d,t[e+2]=l*_+h*d+o*u-c*f,t[e+3]=h*_-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),u=c(i/2),d=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f+u*d*_;break;case"YZX":this._x=u*h*f+l*d*_,this._y=l*d*f+u*h*_,this._z=l*h*_-u*d*f,this._w=l*h*f-u*d*_;break;case"XZY":this._x=u*h*f-l*d*_,this._y=l*d*f-u*h*_,this._z=l*h*_+u*d*f,this._w=l*h*f+u*d*_;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mh=new O,vp=new ln,Zt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l)}set(t,e,i,r,s,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],M=r[1],E=r[4],v=r[7],T=r[2],A=r[5],g=r[8];return s[0]=a*x+o*M+c*T,s[3]=a*m+o*E+c*A,s[6]=a*p+o*v+c*g,s[1]=l*x+h*M+f*T,s[4]=l*m+h*E+f*A,s[7]=l*p+h*v+f*g,s[2]=u*x+d*M+_*T,s[5]=u*m+d*E+_*A,s[8]=u*p+d*v+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*s,d=l*s-a*c,_=e*f+i*u+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=f*x,t[1]=(r*l-h*i)*x,t[2]=(o*i-r*a)*x,t[3]=u*x,t[4]=(h*e-r*c)*x,t[5]=(r*s-o*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(a*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sh.makeScale(t,e)),this}rotate(t){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sh.makeRotation(-t)),this}translate(t,e){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sh=new Zt,bp=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mp=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yv(){let n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===de&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?Us:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:t,whitePoint:i,transfer:Us,toXYZ:bp,fromXYZ:Mp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:i,transfer:de,toXYZ:bp,fromXYZ:Mp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),n}var le=Yv();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var xr,Xo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xr===void 0&&(xr=Fs("canvas")),xr.width=t.width,xr.height=t.height;let r=xr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=xr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=jn(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$v=0,zr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wh(r[a].image)):s.push(wh(r[a]))}else s=wh(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function wh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Zv=0,Th=new O,Ke=class n extends Mn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ln,r=Ln,s=Je,a=ii,o=An,c=tn,l=n.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ri(),this.name="",this.source=new zr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ho:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case Wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ho:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case Wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=fu;Ke.DEFAULT_ANISOTROPY=1;var ve=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,v=(d+1)/2,T=(p+1)/2,A=(h+u)/4,g=(f+x)/4,S=(_+m)/4;return E>v&&E>T?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=g/i):v>T?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=A/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=g/s,r=S/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends Mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Ke({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new zr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Yo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ks=class extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _e=class n{static{this.prototype.isMatrix4=!0}constructor(t,e,i,r,s,a,o,c,l,h,f,u,d,_,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,c,l,h,f,u,d,_,x,m)}set(t,e,i,r,s,a,o,c,l,h,f,u,d,_,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/yr.setFromMatrixColumn(t,0).length(),s=1/yr.setFromMatrixColumn(t,1).length(),a=1/yr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=a*h,d=a*f,_=o*h,x=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+_*l,e[5]=u-x*l,e[9]=-o*c,e[2]=x-u*l,e[6]=_+d*l,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,_=l*h,x=l*f;e[0]=u+x*o,e[4]=_*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=x+u*o,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,_=l*h,x=l*f;e[0]=u-x*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,_=o*h,x=o*f;e[0]=c*h,e[4]=_*l-d,e[8]=u*l+x,e[1]=c*f,e[5]=x*l+u,e[9]=d*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*l,_=o*c,x=o*l;e[0]=c*h,e[4]=x-u*f,e[8]=_*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+_,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*c,d=a*l,_=o*c,x=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jv,t,Kv)}lookAt(t,e,i){let r=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),fi.crossVectors(i,sn),fi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),fi.crossVectors(i,sn)),fi.normalize(),lo.crossVectors(sn,fi),r[0]=fi.x,r[4]=lo.x,r[8]=sn.x,r[1]=fi.y,r[5]=lo.y,r[9]=sn.y,r[2]=fi.z,r[6]=lo.z,r[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],M=i[3],E=i[7],v=i[11],T=i[15],A=r[0],g=r[4],S=r[8],U=r[12],P=r[1],F=r[5],D=r[9],k=r[13],C=r[2],W=r[6],Y=r[10],H=r[14],nt=r[3],q=r[7],Z=r[11],it=r[15];return s[0]=a*A+o*P+c*C+l*nt,s[4]=a*g+o*F+c*W+l*q,s[8]=a*S+o*D+c*Y+l*Z,s[12]=a*U+o*k+c*H+l*it,s[1]=h*A+f*P+u*C+d*nt,s[5]=h*g+f*F+u*W+d*q,s[9]=h*S+f*D+u*Y+d*Z,s[13]=h*U+f*k+u*H+d*it,s[2]=_*A+x*P+m*C+p*nt,s[6]=_*g+x*F+m*W+p*q,s[10]=_*S+x*D+m*Y+p*Z,s[14]=_*U+x*k+m*H+p*it,s[3]=M*A+E*P+v*C+T*nt,s[7]=M*g+E*F+v*W+T*q,s[11]=M*S+E*D+v*Y+T*Z,s[15]=M*U+E*k+v*H+T*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],x=t[7],m=t[11],p=t[15],M=c*d-l*u,E=o*d-l*f,v=o*u-c*f,T=a*d-l*h,A=a*u-c*h,g=a*f-o*h;return e*(x*M-m*E+p*v)-i*(_*M-m*T+p*A)+r*(_*E-x*T+p*g)-s*(_*v-x*A+m*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(s*h-o*c)+r*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],x=t[13],m=t[14],p=t[15],M=e*o-i*a,E=e*c-r*a,v=e*l-s*a,T=i*c-r*o,A=i*l-s*o,g=r*l-s*c,S=h*x-f*_,U=h*m-u*_,P=h*p-d*_,F=f*m-u*x,D=f*p-d*x,k=u*p-d*m,C=M*k-E*D+v*F+T*P-A*U+g*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/C;return t[0]=(o*k-c*D+l*F)*W,t[1]=(r*D-i*k-s*F)*W,t[2]=(x*g-m*A+p*T)*W,t[3]=(u*A-f*g-d*T)*W,t[4]=(c*P-a*k-l*U)*W,t[5]=(e*k-r*P+s*U)*W,t[6]=(m*v-_*g-p*E)*W,t[7]=(h*g-u*v+d*E)*W,t[8]=(a*D-o*P+l*S)*W,t[9]=(i*P-e*D-s*S)*W,t[10]=(_*A-x*v+p*M)*W,t[11]=(f*v-h*A-d*M)*W,t[12]=(o*U-a*F-c*S)*W,t[13]=(e*F-i*U+r*S)*W,t[14]=(x*E-_*T-m*M)*W,t[15]=(h*T-f*E+u*M)*W,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,f=o+o,u=s*l,d=s*h,_=s*f,x=a*h,m=a*f,p=o*f,M=c*l,E=c*h,v=c*f,T=i.x,A=i.y,g=i.z;return r[0]=(1-(x+p))*T,r[1]=(d+v)*T,r[2]=(_-E)*T,r[3]=0,r[4]=(d-v)*A,r[5]=(1-(u+p))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(_+E)*g,r[9]=(m-M)*g,r[10]=(1-(u+x))*g,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=yr.set(r[0],r[1],r[2]).length(),o=yr.set(r[4],r[5],r[6]).length(),c=yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),xn.copy(this);let l=1/a,h=1/o,f=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,r,s,a,o=pn,c=!1){let l=this.elements,h=2*s/(e-t),f=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r),_,x;if(c)_=s/(a-s),x=a*s/(a-s);else if(o===pn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Or)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=pn,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-r),u=-(e+t)/(e-t),d=-(i+r)/(i-r),_,x;if(c)_=1/(a-s),x=a/(a-s);else if(o===pn)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===Or)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},yr=new O,xn=new _e,Jv=new O(0,0,0),Kv=new O(1,1,1),fi=new O,lo=new O,sn=new O,Sp=new _e,wp=new ln,ei=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],u=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wp.setFromEuler(this),this.setFromQuaternion(wp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qv=0,Tp=new O,vr=new ln,Xn=new _e,co=new O,Ms=new O,jv=new O,tb=new ln,Ap=new O(1,0,0),Ep=new O(0,1,0),Rp=new O(0,0,1),Cp={type:"added"},eb={type:"removed"},br={type:"childadded",child:null},Ah={type:"childremoved",child:null},Ne=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new ei,i=new ln,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new Zt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(Ap,t)}rotateY(t){return this.rotateOnAxis(Ep,t)}rotateZ(t){return this.rotateOnAxis(Rp,t)}translateOnAxis(t,e){return Tp.copy(t).applyQuaternion(this.quaternion),this.position.add(Tp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ap,t)}translateY(t){return this.translateOnAxis(Ep,t)}translateZ(t){return this.translateOnAxis(Rp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?co.copy(t):co.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ms,co,this.up):Xn.lookAt(co,Ms,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Xn),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cp),br.child=t,this.dispatchEvent(br),br.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eb),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cp),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,jv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,tb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ne.DEFAULT_UP=new O(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},nb={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;l.inputState.pinching&&u>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nb)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Eh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=le.workingColorSpace){if(t=Tu(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Eh(a,s,t+1/3),this.g=Eh(a,s,t),this.b=Eh(a,s,t-1/3)}return le.colorSpaceToWorking(this,r),this}setStyle(t,e=Ve){function i(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let i=Lm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return le.workingToColorSpace(ze.copy(this),t),Math.round(ie(ze.r*255,0,255))*65536+Math.round(ie(ze.g*255,0,255))*256+Math.round(ie(ze.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ze.copy(this),e);let i=ze.r,r=ze.g,s=ze.b,a=Math.max(i,r,s),o=Math.min(i,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ve){le.workingToColorSpace(ze.copy(this),t);let e=ze.r,i=ze.g,r=ze.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ho);let i=Ns(di.h,ho.h,e),r=Ns(di.s,ho.s,e),s=Ns(di.l,ho.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new jt;jt.NAMES=Lm;var Bs=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new O,Yn=new O,Rh=new O,$n=new O,Mr=new O,Sr=new O,Ip=new O,Ch=new O,Ih=new O,Ph=new O,Nh=new ve,Lh=new ve,Dh=new ve,Kn=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),yn.subVectors(t,e),r.cross(yn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){yn.subVectors(r,e),Yn.subVectors(i,e),Rh.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Yn),c=yn.dot(Rh),l=Yn.dot(Yn),h=Yn.dot(Rh),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(l*c-o*h)*u,_=(a*h-o*c)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,r,s,a,o,c){return this.getBarycoord(t,e,i,r,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(t,e,i,r,s,a){return Nh.setScalar(0),Lh.setScalar(0),Dh.setScalar(0),Nh.fromBufferAttribute(t,e),Lh.fromBufferAttribute(t,i),Dh.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Nh,s.x),a.addScaledVector(Lh,s.y),a.addScaledVector(Dh,s.z),a}static isFrontFacing(t,e,i,r){return yn.subVectors(i,e),Yn.subVectors(t,e),yn.cross(Yn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),yn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,a,o;Mr.subVectors(r,i),Sr.subVectors(s,i),Ch.subVectors(t,i);let c=Mr.dot(Ch),l=Sr.dot(Ch);if(c<=0&&l<=0)return e.copy(i);Ih.subVectors(t,r);let h=Mr.dot(Ih),f=Sr.dot(Ih);if(h>=0&&f<=h)return e.copy(r);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Mr,a);Ph.subVectors(t,s);let d=Mr.dot(Ph),_=Sr.dot(Ph);if(_>=0&&d<=_)return e.copy(s);let x=d*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Sr,o);let m=h*_-d*f;if(m<=0&&f-h>=0&&d-_>=0)return Ip.subVectors(s,r),o=(f-h)/(f-h+(d-_)),e.copy(r).addScaledVector(Ip,o);let p=1/(m+x+u);return a=x*p,o=u*p,e.copy(i).addScaledVector(Mr,a).addScaledVector(Sr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_i=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(s,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),fo.subVectors(this.max,Ss),wr.subVectors(t.a,Ss),Tr.subVectors(t.b,Ss),Ar.subVectors(t.c,Ss),pi.subVectors(Tr,wr),mi.subVectors(Ar,Tr),zi.subVectors(wr,Ar);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-zi.z,zi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,zi.z,0,-zi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-zi.y,zi.x,0];return!Uh(e,wr,Tr,Ar,fo)||(e=[1,0,0,0,1,0,0,0,1],!Uh(e,wr,Tr,Ar,fo))?!1:(po.crossVectors(pi,mi),e=[po.x,po.y,po.z],Uh(e,wr,Tr,Ar,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new O,new O,new O,new O,new O,new O,new O,new O],vn=new O,uo=new _i,wr=new O,Tr=new O,Ar=new O,pi=new O,mi=new O,zi=new O,Ss=new O,fo=new O,po=new O,Vi=new O;function Uh(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Vi.fromArray(n,s);let o=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),c=t.dot(Vi),l=e.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Se=new O,mo=new Gt,ib=0,bn=class extends Mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ib++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=wn,this.version=0,this._normalizationScale=t!==void 0?ec(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix3(t),this.setXY(e,mo.x,mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Eu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ru(t,this.array)}};var zs=class extends bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vs=class extends bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var De=class extends bn{constructor(t,e,i){super(new Float32Array(t),e,i)}},rb=new _i,ws=new O,Fh=new O,Wi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):rb.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);let e=ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Fh)),this.expandByPoint(ws.copy(t.center).sub(Fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sb=0,dn=new _e,Oh=new Ne,Er=new O,an=new _i,Ts=new _i,Ie=new O,hn=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Iv(t)?Vs:zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,i){return dn.makeTranslation(t,e,i),this.applyMatrix4(dn),this}scale(t,e,i){return dn.makeScale(t,e,i),this.applyMatrix4(dn),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(an.min,Ts.min),an.expandByPoint(Ie),Ie.addVectors(an.max,Ts.max),an.expandByPoint(Ie)):(an.expandByPoint(Ts.min),an.expandByPoint(Ts.max))}an.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Ie.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ie));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ie.fromBufferAttribute(o,l),c&&(Er.fromBufferAttribute(t,l),Ie.add(Er)),r=Math.max(r,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let U=0;U<i.count;U++)o[U]=new O,c[U]=new O;let h=new O,f=new O,u=new O,d=new Gt,_=new Gt,x=new Gt,m=new O,p=new O;function M(U,P,F){l[U]=l[P]=l[F]=1,h.fromBufferAttribute(i,U),f.fromBufferAttribute(i,P),u.fromBufferAttribute(i,F),d.fromBufferAttribute(s,U),_.fromBufferAttribute(s,P),x.fromBufferAttribute(s,F),f.sub(h),u.sub(h),_.sub(d),x.sub(d);let D=1/(_.x*x.y-x.x*_.y);isFinite(D)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(u,-_.y).multiplyScalar(D),p.copy(u).multiplyScalar(_.x).addScaledVector(f,-x.x).multiplyScalar(D),o[U].add(m),o[P].add(m),o[F].add(m),c[U].add(p),c[P].add(p),c[F].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,P=E.length;U<P;++U){let F=E[U],D=F.start,k=F.count;for(let C=D,W=D+k;C<W;C+=3)M(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let v=new O,T=new O,A=new O,g=new O;function S(U){A.fromBufferAttribute(r,U),g.copy(A);let P=o[U];v.copy(P),v.sub(A.multiplyScalar(A.dot(P))).normalize(),T.crossVectors(g,P);let D=T.dot(c[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,D)}for(let U=0,P=i.count;U<P;++U)l[U]&&S(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),d=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*h;for(let p=0;p<h;p++)u[_++]=l[d++]}return new bn(u,h,f)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let o in r){let c=r[o],l=t(c,i);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],f=s[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Su,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Pp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Pp(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Pp(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ri()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var $e=new O,Gs=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r,this._normalizationScale=t!==void 0?ec(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Os("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new bn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Os("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Eu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ru(t,this.data.array)}},kh=new O,ab=new O,ob=new Zt,on=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=kh.subVectors(i,e).cross(ab.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(kh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ob.getNormalMatrix(t),r=this.coplanarPoint(kh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lb=0,Dn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Kr,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new on().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Hr=class extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rr,As=new O,Cr=new O,Ir=new O,Pr=new Gt,Es=new Gt,Dm=new _e,go=new O,Rs=new O,_o=new O,Np=new Gt,Bh=new Gt,Lp=new Gt,Hs=class extends Ne{constructor(t=new Hr){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new hn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zo(e,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Gs(i,3,0,!1)),Rr.setAttribute("uv",new Gs(i,2,3,!1))}this.geometry=Rr,this.material=t,this.center=new Gt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),Dm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ir.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Ir.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;xo(go.set(-.5,-.5,0),Ir,a,Cr,r,s),xo(Rs.set(.5,-.5,0),Ir,a,Cr,r,s),xo(_o.set(.5,.5,0),Ir,a,Cr,r,s),Np.set(0,0),Bh.set(1,0),Lp.set(1,1);let o=t.ray.intersectTriangle(go,Rs,_o,!1,As);if(o===null&&(xo(Rs.set(-.5,.5,0),Ir,a,Cr,r,s),Bh.set(0,1),o=t.ray.intersectTriangle(go,_o,Rs,!1,As),o===null))return;let c=t.ray.origin.distanceTo(As);c<t.near||c>t.far||e.push({distance:c,point:As.clone(),uv:Kn.getInterpolation(As,go,Rs,_o,Np,Bh,Lp,new Gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function xo(n,t,e,i,r,s){Pr.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Es.x=s*Pr.x-r*Pr.y,Es.y=r*Pr.x+s*Pr.y):Es.copy(Pr),n.copy(t),n.x+=Es.x,n.y+=Es.y,n.applyMatrix4(Dm)}var Jn=new O,zh=new O,yo=new O,vo=new O,xi=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){zh.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),vo.copy(this.origin).sub(zh);let s=t.distanceTo(e)*.5,a=-this.direction.dot(yo),o=vo.dot(this.direction),c=-vo.dot(yo),l=vo.lengthSq(),h=Math.abs(1-a*a),f,u,d,_;if(h>0)if(f=a*c-o,u=a*o-c,_=s*h,f>=0)if(u>=-_)if(u<=_){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-s,-c),s),d=u*(u+2*c)+l):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+u*(u+2*c)+l);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zh).addScaledVector(yo,u),d}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,r=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,r=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,r,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,_=e.x-a.x,x=e.y-a.y,m=e.z-a.z,p=i.x-a.x,M=i.y-a.y,E=i.z-a.z,v=Math.abs(c),T=Math.abs(l),A=Math.abs(h),g,S,U,P,F,D,k,C,W,Y,H,nt;if(v>=T&&v>=A?(U=c,D=f,W=_,nt=p,c>=0?(g=l,S=h,P=u,F=d,k=x,C=m,Y=M,H=E):(g=h,S=l,P=d,F=u,k=m,C=x,Y=E,H=M)):T>=A?(U=l,D=u,W=x,nt=M,l>=0?(g=h,S=c,P=d,F=f,k=m,C=_,Y=E,H=p):(g=c,S=h,P=f,F=d,k=_,C=m,Y=p,H=E)):(U=h,D=d,W=m,nt=E,h>=0?(g=c,S=l,P=f,F=u,k=_,C=x,Y=p,H=M):(g=l,S=c,P=u,F=f,k=x,C=_,Y=M,H=p)),U===0)return null;let q=g/U,Z=S/U,it=1/U,Ct=P-q*D,Bt=F-Z*D,J=k-q*W,dt=C-Z*W,Et=Y-q*nt,et=H-Z*nt,ot=Et*dt-et*J,zt=Ct*et-Bt*Et,L=J*Bt-dt*Ct;if(r){if(ot<0||zt<0||L<0)return null}else if((ot<0||zt<0||L<0)&&(ot>0||zt>0||L>0))return null;let G=ot+zt+L;if(G===0)return null;let st=it*(ot*D+zt*W+L*nt);return(G>0?st<0:st>0)?null:this.at(st/G,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wr=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dp=new _e,Gi=new xi,bo=new Wi,Up=new O,Mo=new O,So=new O,wo=new O,Vh=new O,To=new O,Fp=new O,Ao=new O,un=class extends Ne{constructor(t=new hn,e=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){To.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],f=s[c];h!==0&&(Vh.fromBufferAttribute(f,t),a?To.addScaledVector(Vh,h):To.addScaledVector(Vh.sub(e),h))}e.add(To)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),Gi.copy(t.ray).recast(t.near),!(bo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(bo,Up)===null||Gi.origin.distanceToSquared(Up)>(t.far-t.near)**2))&&(Dp.copy(s).invert(),Gi.copy(t.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){let m=u[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=E;v<T;v+=3){let A=o.getX(v),g=o.getX(v+1),S=o.getX(v+2);r=Eo(this,p,t,i,l,h,f,A,g,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let _=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){let M=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);r=Eo(this,a,t,i,l,h,f,M,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){let m=u[_],p=a[m.materialIndex],M=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=E;v<T;v+=3){let A=v,g=v+1,S=v+2;r=Eo(this,p,t,i,l,h,f,A,g,S),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let _=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){let M=m,E=m+1,v=m+2;r=Eo(this,a,t,i,l,h,f,M,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function cb(n,t,e,i,r,s,a,o){let c;if(t.side===Ue?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Ai,o),c===null)return null;Ao.copy(o),Ao.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ao);return l<e.near||l>e.far?null:{distance:l,point:Ao.clone(),object:n}}function Eo(n,t,e,i,r,s,a,o,c,l){n.getVertexPosition(o,Mo),n.getVertexPosition(c,So),n.getVertexPosition(l,wo);let h=cb(n,t,e,i,Mo,So,wo,Fp);if(h){let f=new O;Kn.getBarycoord(Fp,Mo,So,wo,f),r&&(h.uv=Kn.getInterpolatedAttribute(r,o,c,l,f,new Gt)),s&&(h.uv1=Kn.getInterpolatedAttribute(s,o,c,l,f,new Gt)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,c,l,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new O,materialIndex:0};Kn.getNormal(Mo,So,wo,u.normal),h.face=u,h.barycoord=f}return h}var Jo=class extends Ke{constructor(t=null,e=1,i=1,r,s,a,o,c,l=Pe,h=Pe,f,u){super(null,a,o,c,l,h,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=new Wi,hb=new Gt(.5,.5),Ro=new O,yi=class{constructor(t=new on,e=new on,i=new on,r=new on,s=new on,a=new on){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pn,i=!1){let r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],u=s[6],d=s[7],_=s[8],x=s[9],m=s[10],p=s[11],M=s[12],E=s[13],v=s[14],T=s[15];if(r[0].setComponents(l-a,d-h,p-_,T-M).normalize(),r[1].setComponents(l+a,d+h,p+_,T+M).normalize(),r[2].setComponents(l+o,d+f,p+x,T+E).normalize(),r[3].setComponents(l-o,d-f,p-x,T-E).normalize(),i)r[4].setComponents(c,u,m,v).normalize(),r[5].setComponents(l-c,d-u,p-m,T-v).normalize();else if(r[4].setComponents(l-c,d-u,p-m,T-v).normalize(),e===pn)r[5].setComponents(l+c,d+u,p+m,T+v).normalize();else if(e===Or)r[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=hb.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Ro.x=r.normal.x>0?t.max.x:t.min.x,Ro.y=r.normal.y>0?t.max.y:t.min.y,Ro.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Op=new _e,Ko=class n{constructor(){this.coordinateSystem=pn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let r=0;r<e.length;r++){let s=e[r];Op.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new yi),i[r].setFromProjectionMatrix(Op,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let r=0;r<t._count;r++)e[r]===void 0&&(e[r]=new yi),e[r].copy(i[r]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Un=class extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qo=new O,jo=new O,kp=new _e,Cs=new xi,Co=new Wi,Gh=new O,Bp=new O,qr=class extends Ne{constructor(t=new hn,e=new Un){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Qo.fromBufferAttribute(e,r-1),jo.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Qo.distanceTo(jo);t.setAttribute("lineDistance",new De(i,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,t.ray.intersectsSphere(Co)===!1)return;kp.copy(r).invert(),Cs.copy(t.ray).applyMatrix4(kp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=d,m=_-1;x<m;x+=l){let p=h.getX(x),M=h.getX(x+1),E=Io(this,t,Cs,c,p,M,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(_-1),m=h.getX(d),p=Io(this,t,Cs,c,x,m,_-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=d,m=_-1;x<m;x+=l){let p=Io(this,t,Cs,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Io(this,t,Cs,c,_-1,d,_-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Io(n,t,e,i,r,s,a){let o=n.geometry.attributes.position;if(Qo.fromBufferAttribute(o,r),jo.fromBufferAttribute(o,s),e.distanceSqToSegment(Qo,jo,Gh,Bp)>i)return;Gh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Gh);if(!(l<t.near||l>t.far))return{distance:l,point:Bp.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var zp=new O,Vp=new O,Ws=class extends qr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)zp.fromBufferAttribute(e,r),Vp.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+zp.distanceTo(Vp);t.setAttribute("lineDistance",new De(i,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qs=class extends Ke{constructor(t=[],e=Yi,i,r,s,a,o,c,l,h){super(t,e,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xs=class extends Ke{constructor(t,e,i,r,s,a,o,c,l){super(t,e,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends Ke{constructor(t,e,i=Sn,r,s,a,o=Pe,c=Pe,l,h=ti,f=1){if(h!==ti&&h!==ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ys=class extends ni{constructor(t,e=Sn,i=Yi,r,s,a=Pe,o=Pe,c,l=ti){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$s=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vi=class n extends hn{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(f,2));function _(x,m,p,M,E,v,T,A,g,S,U){let P=v/g,F=T/S,D=v/2,k=T/2,C=A/2,W=g+1,Y=S+1,H=0,nt=0,q=new O;for(let Z=0;Z<Y;Z++){let it=Z*F-k;for(let Ct=0;Ct<W;Ct++){let Bt=Ct*P-D;q[x]=Bt*M,q[m]=it*E,q[p]=C,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=A>0?1:-1,h.push(q.x,q.y,q.z),f.push(Ct/g),f.push(1-Z/S),H+=1}}for(let Z=0;Z<S;Z++)for(let it=0;it<g;it++){let Ct=u+it+W*Z,Bt=u+it+W*(Z+1),J=u+(it+1)+W*(Z+1),dt=u+(it+1)+W*Z;c.push(Ct,Bt,dt),c.push(Bt,J,dt),nt+=6}o.addGroup(d,nt,U),d+=nt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zs=class n extends hn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=t/o,u=e/c,d=[],_=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let E=0;E<l;E++){let v=E*f-s;_.push(v,-M,0),x.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let E=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),A=M+1+l*p;d.push(E,v,A),d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new De(_,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Js=class n extends hn{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new O,u=new O,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){let M=[],E=p/i,v=a+E*o,T=t*Math.cos(v),A=Math.sqrt(t*t-T*T),g=0;p===0&&a===0?g=.5/e:p===i&&c===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let U=S/e,P=r+U*s;f.x=-A*Math.cos(P),f.y=T,f.z=A*Math.sin(P),_.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(U+g,1-E),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let E=h[p][M+1],v=h[p][M],T=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&d.push(E,v,A),(p!==i-1||c<Math.PI)&&d.push(v,T,A)}this.setIndex(d),this.setAttribute("position",new De(_,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Gp(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Gp(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=Zi(n[e]);for(let r in i)t[r]=i[r]}return t}function Gp(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ub(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Iu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Um={clone:Zi,merge:Ge},fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=ub(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new jt().setHex(r.value);break;case"v2":this.uniforms[i].value=new Gt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new _e().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},tl=class extends Fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ks=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var el=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Qs=class extends Un{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Nr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Po(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var bi=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=e[++i],t<r)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},il=class extends bi{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xh:s=t,o=2*e-i;break;case Yh:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Xh:a=t,c=2*i-e;break;case Yh:a=1,c=i+r[1]-r[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-e)/(r-e),x=_*_,m=x*_,p=-u*m+2*u*x-u*_,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*_+1,E=(-1-d)*m+(1.5+d)*x+.5*_,v=d*m-d*x;for(let T=0;T!==o;++T)s[T]=p*a[h+T]+M*a[l+T]+E*a[c+T]+v*a[f+T];return s}},rl=class extends bi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(r-e),f=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*f+a[c+u]*h;return s}},sl=class extends bi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},al=class extends bi{interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(i-e)/(r-e),x=1-_;for(let m=0;m!==o;++m)s[m]=a[l+m]*x+a[c+m]*_;return s}let u=o*2,d=t-1;for(let _=0;_!==o;++_){let x=a[l+_],m=a[c+_],p=d*u+_*2,M=f[p],E=f[p+1],v=t*u+_*2,T=h[v],A=h[v+1],g=mb(i,e,M,T,r);s[_]=Fm(g,x,E,A,m)}return s}};function Fm(n,t,e,i,r){let s=1-n;return s*s*s*t+3*s*s*n*e+3*s*n*n*i+n*n*n*r}function pb(n,t,e,i,r){let s=1-n;return 3*s*s*(e-t)+6*s*n*(i-e)+3*n*n*(r-i)}function mb(n,t,e,i,r){let s=(n-t)/(r-t);for(let a=0;a<8;a++){let o=Fm(s,t,e,i,r)-n;if(Math.abs(o)<1e-10)break;let c=pb(s,t,e,i,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var fn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),Po(t.settings)&&(i.settings={inTangents:Nr(t.settings.inTangents,Array),outTangents:Nr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new al(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ls:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Do:e=this.InterpolantFactoryMethodSmooth;break;case Wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Do;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t;Po(this.settings)&&(Hp(this.settings.inTangents,t),Hp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;Po(this.settings)&&(Wp(this.settings.inTangents,t),Wp(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Yt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(r!==void 0&&Pv(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){Yt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Do,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(r)c=!0;else{let f=o*i,u=f-i,d=f+i;for(let _=0;_!==i;++_){let x=e[f+_];if(x!==e[u+_]||x!==e[d+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,Po(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Hp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Wp(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=qo;var Mi=class extends fn{constructor(t,e,i){super(t,e,i)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Ls;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};ol.prototype.ValueTypeName="color";var ll=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};ll.prototype.ValueTypeName="number";var cl=class extends bi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(r-e),l=t*o;for(let h=l+o;l!==h;l+=4)ln.slerpFlat(s,0,a,l-o,a,l,c);return s}},js=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends fn{constructor(t,e,i){super(t,e,i)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Ls;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};hl.prototype.ValueTypeName="vector";var ul=class{constructor(t,e,i){let r=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],_=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new ul,fl=class{constructor(t){this.manager=t!==void 0?t:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};fl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ta=class extends Xr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hh=new _e,qp=new O,Xp=new O,dl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yi,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qp.setFromMatrixPosition(t.matrixWorld),e.position.copy(qp),Xp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Hh,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;t.coordinateSystem===Or||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Hh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},No=new O,Lo=new ln,Nn=new O,ea=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(No,Lo,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Lo,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(No,Lo,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Lo,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new O,Yp=new Gt,$p=new Gt,Ze=class extends ea{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Yp,$p),e.subVectors($p,Yp)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var na=class extends ea{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,a=i+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$h=class extends dl{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Xr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new $h}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ia=class extends Xr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lr=-90,Dr=1,$r=class extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ze(Lr,Dr,t,e);r.layers=this.layers,this.add(r);let s=new Ze(Lr,Dr,t,e);s.layers=this.layers,this.add(s);let a=new Ze(Lr,Dr,t,e);a.layers=this.layers,this.add(a);let o=new Ze(Lr,Dr,t,e);o.layers=this.layers,this.add(o);let c=new Ze(Lr,Dr,t,e);c.layers=this.layers,this.add(c);let l=new Ze(Lr,Dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Or)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=x,t.setRenderTarget(i,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},pl=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Pu="\\[\\]\\.:\\/",gb=new RegExp("["+Pu+"]","g"),Nu="[^"+Pu+"]",_b="[^"+Pu.replace("\\.","")+"]",xb=/((?:WC+[\/:])*)/.source.replace("WC",Nu),yb=/(WCOD+)?/.source.replace("WCOD",_b),vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),bb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),Mb=new RegExp("^"+xb+yb+vb+bb+"$"),Sb=["material","materials","bones","map"],Zh=class{constructor(t,e,i){let r=i||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ye=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gb,"")}static parseTrackName(t){let e=Mb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Sb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[r];if(a===void 0){let l=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Zh;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aR=new Float32Array(1);var Zp=new _e,ra=class{constructor(t,e,i=0,r=1/0){this.ray=new xi(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Zp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zp),this}intersectObject(t,e=!0,i=[]){return Jh(t,this,i,e),i.sort(Jp),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Jh(t[r],this,i,e);return i.sort(Jp),i}};function Jp(n,t){return n.distance-t.distance}function Jh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let a=0,o=s.length;a<o;a++)Jh(s[a],t,e,!0)}}var Zr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Kh=class{static{this.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};var sa=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Lu(n,t,e,i){let r=wb(i);switch(e){case _u:return n*t;case yu:return n*t/r.components*r.byteLength;case bl:return n*t/r.components*r.byteLength;case Ei:return n*t*2/r.components*r.byteLength;case Ml:return n*t*2/r.components*r.byteLength;case xu:return n*t*3/r.components*r.byteLength;case An:return n*t*4/r.components*r.byteLength;case Sl:return n*t*4/r.components*r.byteLength;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:case El:return Math.max(n,16)*Math.max(t,8)/4;case wl:case Al:return Math.max(n,8)*Math.max(t,8)/2;case Rl:case Cl:case Pl:case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Il:case fa:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $l:case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kl:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*8;case da:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wb(n){switch(n){case tn:case du:return{byteLength:1,components:1};case jr:case pu:case Tn:return{byteLength:2,components:1};case yl:case vl:return{byteLength:2,components:4};case Sn:case xl:case wn:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function sg(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Ab(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){let _=f[u],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){let x=f[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Eb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ub=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nM="gl_FragColor = linearToOutputTexel( gl_FragColor );",iM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ZM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,AS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ES=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,US=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$S=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:Eb,alphahash_pars_fragment:Rb,alphamap_fragment:Cb,alphamap_pars_fragment:Ib,alphatest_fragment:Pb,alphatest_pars_fragment:Nb,aomap_fragment:Lb,aomap_pars_fragment:Db,batching_pars_vertex:Ub,batching_vertex:Fb,begin_vertex:Ob,beginnormal_vertex:kb,bsdfs:Bb,iridescence_fragment:zb,bumpmap_pars_fragment:Vb,clipping_planes_fragment:Gb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:qb,color_fragment:Xb,color_pars_fragment:Yb,color_pars_vertex:$b,color_vertex:Zb,common:Jb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Qb,displacementmap_vertex:jb,emissivemap_fragment:tM,emissivemap_pars_fragment:eM,colorspace_fragment:nM,colorspace_pars_fragment:iM,envmap_fragment:rM,envmap_common_pars_fragment:sM,envmap_pars_fragment:aM,envmap_pars_vertex:oM,envmap_physical_pars_fragment:xM,envmap_vertex:lM,fog_vertex:cM,fog_pars_vertex:hM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:pM,lights_lambert_fragment:mM,lights_lambert_pars_fragment:gM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:vM,lights_phong_fragment:bM,lights_phong_pars_fragment:MM,lights_physical_fragment:SM,lights_physical_pars_fragment:wM,lights_fragment_begin:TM,lights_fragment_maps:AM,lights_fragment_end:EM,lightprobes_pars_fragment:RM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:PM,logdepthbuf_vertex:NM,map_fragment:LM,map_pars_fragment:DM,map_particle_fragment:UM,map_particle_pars_fragment:FM,metalnessmap_fragment:OM,metalnessmap_pars_fragment:kM,morphinstance_vertex:BM,morphcolor_vertex:zM,morphnormal_vertex:VM,morphtarget_pars_vertex:GM,morphtarget_vertex:HM,normal_fragment_begin:WM,normal_fragment_maps:qM,normal_pars_fragment:XM,normal_pars_vertex:YM,normal_vertex:$M,normalmap_pars_fragment:ZM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:jM,opaque_fragment:tS,packing:eS,premultiplied_alpha_fragment:nS,project_vertex:iS,dithering_fragment:rS,dithering_pars_fragment:sS,roughnessmap_fragment:aS,roughnessmap_pars_fragment:oS,shadowmap_pars_fragment:lS,shadowmap_pars_vertex:cS,shadowmap_vertex:hS,shadowmask_pars_fragment:uS,skinbase_vertex:fS,skinning_pars_vertex:dS,skinning_vertex:pS,skinnormal_vertex:mS,specularmap_fragment:gS,specularmap_pars_fragment:_S,tonemapping_fragment:xS,tonemapping_pars_fragment:yS,transmission_fragment:vS,transmission_pars_fragment:bS,uv_pars_fragment:MS,uv_pars_vertex:SS,uv_vertex:wS,worldpos_vertex:TS,background_vert:AS,background_frag:ES,backgroundCube_vert:RS,backgroundCube_frag:CS,cube_vert:IS,cube_frag:PS,depth_vert:NS,depth_frag:LS,distance_vert:DS,distance_frag:US,equirect_vert:FS,equirect_frag:OS,linedashed_vert:kS,linedashed_frag:BS,meshbasic_vert:zS,meshbasic_frag:VS,meshlambert_vert:GS,meshlambert_frag:HS,meshmatcap_vert:WS,meshmatcap_frag:qS,meshnormal_vert:XS,meshnormal_frag:YS,meshphong_vert:$S,meshphong_frag:ZS,meshphysical_vert:JS,meshphysical_frag:KS,meshtoon_vert:QS,meshtoon_frag:jS,points_vert:tw,points_frag:ew,shadow_vert:nw,shadow_frag:iw,sprite_vert:rw,sprite_frag:sw},At={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},zn={basic:{uniforms:Ge([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ge([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new jt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ge([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ge([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ge([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new jt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ge([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ge([At.points,At.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ge([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ge([At.common,At.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ge([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ge([At.sprite,At.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:Ge([At.common,At.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:Ge([At.lights,At.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};zn.physical={uniforms:Ge([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var nc={r:0,b:0,g:0},aw=new _e,ag=new Zt;ag.set(-1,0,0,0,1,0,0,0,1);function ow(n,t,e,i,r,s){let a=new jt(0),o=r===!0?0:1,c,l,h=null,f=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function _(M){let E=!1,v=d(M);v===null?m(a,o):v&&v.isColor&&(m(v,1),E=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(M,E){let v=d(E);v&&v.isCubeTexture?(l===void 0&&(l=new un(new vi(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Zi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(aw.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ag),l.material.toneMapped=le.getTransfer(v.colorSpace)!==de,(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new un(new Zs(2,2),new Fn({name:"BackgroundMaterial",uniforms:Zi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(nc,Iu(n)),e.buffers.color.setClear(nc.r,nc.g,nc.b,E,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:_,addToRenderList:x,dispose:p}}function lw(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,a=!1;function o(F,D,k,C,W){let Y=!1,H=f(F,C,k,D);s!==H&&(s=H,l(s.object)),Y=d(F,C,k,W),Y&&_(F,C,k,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(F,D,k,C),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(F){return n.bindVertexArray(F)}function h(F){return n.deleteVertexArray(F)}function f(F,D,k,C){let W=C.wireframe===!0,Y=i[D.id];Y===void 0&&(Y={},i[D.id]=Y);let H=F.isInstancedMesh===!0?F.id:0,nt=Y[H];nt===void 0&&(nt={},Y[H]=nt);let q=nt[k.id];q===void 0&&(q={},nt[k.id]=q);let Z=q[W];return Z===void 0&&(Z=u(c()),q[W]=Z),Z}function u(F){let D=[],k=[],C=[];for(let W=0;W<e;W++)D[W]=0,k[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:C,object:F,attributes:{},index:null}}function d(F,D,k,C){let W=s.attributes,Y=D.attributes,H=0,nt=k.getAttributes();for(let q in nt)if(nt[q].location>=0){let it=W[q],Ct=Y[q];if(Ct===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Ct=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Ct=F.instanceColor)),it===void 0||it.attribute!==Ct||Ct&&it.data!==Ct.data)return!0;H++}return s.attributesNum!==H||s.index!==C}function _(F,D,k,C){let W={},Y=D.attributes,H=0,nt=k.getAttributes();for(let q in nt)if(nt[q].location>=0){let it=Y[q];it===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(it=F.instanceColor));let Ct={};Ct.attribute=it,it&&it.data&&(Ct.data=it.data),W[q]=Ct,H++}s.attributes=W,s.attributesNum=H,s.index=C}function x(){let F=s.newAttributes;for(let D=0,k=F.length;D<k;D++)F[D]=0}function m(F){p(F,0)}function p(F,D){let k=s.newAttributes,C=s.enabledAttributes,W=s.attributeDivisors;k[F]=1,C[F]===0&&(n.enableVertexAttribArray(F),C[F]=1),W[F]!==D&&(n.vertexAttribDivisor(F,D),W[F]=D)}function M(){let F=s.newAttributes,D=s.enabledAttributes;for(let k=0,C=D.length;k<C;k++)D[k]!==F[k]&&(n.disableVertexAttribArray(k),D[k]=0)}function E(F,D,k,C,W,Y,H){H===!0?n.vertexAttribIPointer(F,D,k,W,Y):n.vertexAttribPointer(F,D,k,C,W,Y)}function v(F,D,k,C){x();let W=C.attributes,Y=k.getAttributes(),H=D.defaultAttributeValues;for(let nt in Y){let q=Y[nt];if(q.location>=0){let Z=W[nt];if(Z===void 0&&(nt==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),nt==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),Z!==void 0){let it=Z.normalized,Ct=Z.itemSize,Bt=t.get(Z);if(Bt===void 0)continue;let J=Bt.buffer,dt=Bt.type,Et=Bt.bytesPerElement,et=dt===n.INT||dt===n.UNSIGNED_INT||Z.gpuType===xl;if(Z.isInterleavedBufferAttribute){let ot=Z.data,zt=ot.isInterleavedBuffer===!0?ot.stride:ot.itemSize,L=Z.offset;if(ot.isInstancedInterleavedBuffer||ot.isInstancedBufferAttribute){for(let G=0;G<q.locationSize;G++)p(q.location+G,ot.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let G=0;G<q.locationSize;G++)m(q.location+G);n.bindBuffer(n.ARRAY_BUFFER,J);for(let G=0;G<q.locationSize;G++)E(q.location+G,Ct/q.locationSize,dt,it,zt*Et,(L+Ct/q.locationSize*G)*Et,et)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<q.locationSize;ot++)p(q.location+ot,Z.meshPerAttribute);F.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<q.locationSize;ot++)m(q.location+ot);n.bindBuffer(n.ARRAY_BUFFER,J);for(let ot=0;ot<q.locationSize;ot++)E(q.location+ot,Ct/q.locationSize,dt,it,Ct*Et,Ct/q.locationSize*ot*Et,et)}}else if(H!==void 0){let it=H[nt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(q.location,it);break;case 3:n.vertexAttrib3fv(q.location,it);break;case 4:n.vertexAttrib4fv(q.location,it);break;default:n.vertexAttrib1fv(q.location,it)}}}}M()}function T(){U();for(let F in i){let D=i[F];for(let k in D){let C=D[k];for(let W in C){let Y=C[W];for(let H in Y)h(Y[H].object),delete Y[H];delete C[W]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;let D=i[F.id];for(let k in D){let C=D[k];for(let W in C){let Y=C[W];for(let H in Y)h(Y[H].object),delete Y[H];delete C[W]}}delete i[F.id]}function g(F){for(let D in i){let k=i[D];for(let C in k){let W=k[C];if(W[F.id]===void 0)continue;let Y=W[F.id];for(let H in Y)h(Y[H].object),delete Y[H];delete W[F.id]}}}function S(F){for(let D in i){let k=i[D],C=F.isInstancedMesh===!0?F.id:0,W=k[C];if(W!==void 0){for(let Y in W){let H=W[Y];for(let nt in H)h(H[nt].object),delete H[nt];delete W[Y]}delete k[C],Object.keys(k).length===0&&delete i[D]}}}function U(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function cw(n,t,e){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function hw(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(g){return!(g!==An&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===Tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==tn&&g!==wn&&!S&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(qt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:T,samples:A}}function uw(n){let t=this,e=null,i=0,r=!1,s=!1,a=new on,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||r;return r=u,i=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{let M=s?0:i,E=M*4,v=p.clippingState||null;c.value=v,v=h(_,u,E,d);for(let T=0;T!==E;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,_){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,_!==!0||m===null){let p=d+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==x;++E,v+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ga=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new qs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vi(5,5,5),s=new Fn({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:qi});s.uniforms.tEquirect.value=e;let a=new un(r,s),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Je),new $r(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}},km=256,fw=3,dw=20,og=256,lg=16,pw=3,mw=new O,gw=new jt,rc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new $r(1,10,null),this._boxMesh=new un(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){let{size:a=256,position:o=mw}=s,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,_=c.autoClearStencil,x=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(t.background=c.getClearColor(gw));let m=new $r(i,r,h);return m.position.copy(o),m.update(c,t),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=_,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(km,Au(t))}_fromTexture(t,e){t.mapping===Yi||t.mapping===Qr?this._setSize(t.image.length===0?km:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Bm(t,!1,!1),i=Math.log2(t)-fw;for(let r=0;r<=i;r++)e.texture.mipmaps.push({width:t>>r,height:t>>r});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Bm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),s.update(this._renderer,r),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Yi||t.mapping===Qr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=_w(),this._integrationMaterial=xw());let e=this._cubeSize,i=t.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/lg);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-pw)s.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(og*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yw());let i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(t,0,i),r.envMap.value=t.texture,this._renderCube(s,0,i)}};function Bm(n,t,e){return new ga(n,{minFilter:ii,generateMipmaps:t,type:Tn,colorSpace:Ds,depthBuffer:e})}function _a(n,t,e){return new Fn({name:n,uniforms:t,vertexShader:ne.cube_vert,fragmentShader:e,side:Ue,blending:qi,depthTest:!1,depthWrite:!1})}function _w(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${og}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xw(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lg}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yw(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dw}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function zm(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vm(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vw(n){let t=new WeakMap,e=new WeakMap,i=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===ml||d===gl)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let x=new ga(_.height);return x.fromEquirectangularTexture(n,u),t.set(u,x),u.addEventListener("dispose",l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,_=d===ml||d===gl,x=d===Yi||d===Qr;if(_||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new rc(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return _&&M&&M.height>0||x&&M&&c(M)?(i===null&&(i=new rc(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===ml?u.mapping=Yi:d===gl&&(u.mapping=Qr),u}function c(u){let d=0,_=6;for(let x=0;x<_;x++)u[x]!==void 0&&d++;return d===_}function l(u){let d=u.target;d.removeEventListener("dispose",l);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function bw(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Is("WebGLRenderer: "+i+" extension not supported."),r}}}function Mw(n,t,e,i){let r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let m in _.attributes)t.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete r[_.id],a.unregister(_);let x=s.get(_);x&&(t.remove(x),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(_){let x=_.attributes;for(let m in x)t.update(x[m],n.ARRAY_BUFFER)}function f(_){let x=_.index,m=_.attributes.position,p=0;if(m===void 0)return;let M=x!==null?x.array.length:m.array.length/3-1,E=m.count>=65535?Vs:zs,v=new E(Math.ceil(M/3)*6,1),T=v.array;if(x!==null){let g=x.array;p=x.version;for(let S=0,U=0;S<M;S+=3){let P=g[S+0],F=g[S+1],D=g[S+2];T[U++]=P,T[U++]=F,T[U++]=F,T[U++]=D,T[U++]=D,T[U++]=P}}else{p=m.version;for(let g=0,S=0;g<M;g+=3){let U=g+0,P=g+1,F=g+2;T[S++]=U,T[S++]=P,T[S++]=P,T[S++]=F,T[S++]=F,T[S++]=U}}v.version=p;let A=s.get(_);A&&t.remove(A),s.set(_,v)}function u(_){let x=s.get(_);if(x){let m=_.index;m!==null&&x.version<m.version&&f(_)}else f(_);return s.get(_)}function d(){for(let _ in r){let x=r[_].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Sw(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,s,f*a),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,s,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];e.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ww(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Tw(n,t,e){let i=new WeakMap,r=new ve;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let U=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),_===!0&&(E=2),x===!0&&(E=3);let v=o.attributes.position.count*E,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*T*4*f),g=new ks(A,v,T,f);g.type=wn,g.needsUpdate=!0;let S=E*4;for(let P=0;P<f;P++){let F=m[P],D=p[P],k=M[P],C=v*T*4*P;for(let W=0;W<F.count;W++){let Y=W*S;d===!0&&(r.fromBufferAttribute(F,W),A[C+Y+0]=r.x,A[C+Y+1]=r.y,A[C+Y+2]=r.z,A[C+Y+3]=0),_===!0&&(r.fromBufferAttribute(D,W),A[C+Y+4]=r.x,A[C+Y+5]=r.y,A[C+Y+6]=r.z,A[C+Y+7]=0),x===!0&&(r.fromBufferAttribute(k,W),A[C+Y+8]=r.x,A[C+Y+9]=r.y,A[C+Y+10]=r.z,A[C+Y+11]=k.itemSize===4?r.w:1)}}u={count:f,texture:g,size:new Gt(v,T)},i.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Aw(n,t,e,i,r){let s=new WeakMap;function a(l){let h=r.render.frame,f=l.geometry,u=t.get(l,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ew={[su]:"LINEAR_TONE_MAPPING",[au]:"REINHARD_TONE_MAPPING",[ou]:"CINEON_TONE_MAPPING",[lu]:"ACES_FILMIC_TONE_MAPPING",[hu]:"AGX_TONE_MAPPING",[uu]:"NEUTRAL_TONE_MAPPING",[cu]:"CUSTOM_TONE_MAPPING"};function Rw(n,t,e,i,r,s){let a=new cn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new hn;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));let f=new tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new un(h,f),d=new na(-1,1,1,-1,0,1),_=null,x=null,m=!1,p,M=null,E=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),c!==null&&c.setSize(T,A);for(let g=0;g<E.length;g++){let S=E[g];S.setSize&&S.setSize(T,A)}},this.setEffects=function(T){E=T,v=E.length>0&&E[0].isRenderPass===!0;let A=a.width,g=a.height;E.length>0&&o===null&&(o=new cn(A,g,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new cn(A,g,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));let S=r===!0&&E.some(U=>U.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new ni(A,g),s===!0&&(l.format=ri,l.type=$i)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let U=0;U<E.length;U++){let P=E[U];P.setSize&&P.setSize(A,g),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(T,A){if(m||T.toneMapping===kn&&E.length===0)return!1;if(M=A,A!==null){let g=A.width,S=A.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return v===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=kn,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=p,m=!0;let g=a,S=o;for(let U=0;U<E.length;U++){let P=E[U];P.enabled!==!1&&(P.render(T,S,g,A),P.needsSwap!==!1&&(g=S,S=S===o?c:o))}if(_!==T.outputColorSpace||x!==T.toneMapping){_=T.outputColorSpace,x=T.toneMapping,f.defines={},le.getTransfer(_)===de&&(f.defines.SRGB_TRANSFER="");let U=Ew[x];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(M),T.render(u,d),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var cg=new Ke,hg=new ni(1,1),ug=new Ys(1),fg=new ks,dg=new $o,pg=new qs,Gm=[],Hm=[],Wm=new Float32Array(16),qm=new Float32Array(9),Xm=new Float32Array(4);function es(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=Gm[r];if(s===void 0&&(s=new Float32Array(r),Gm[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function we(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=Hm[t];e===void 0&&(e=new Int32Array(t),Hm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Iw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function Pw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function Nw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function Lw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;Xm.set(i),n.uniformMatrix2fv(this.addr,!1,Xm),Te(e,i)}}function Dw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;qm.set(i),n.uniformMatrix3fv(this.addr,!1,qm),Te(e,i)}}function Uw(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(we(e,i))return;Wm.set(i),n.uniformMatrix4fv(this.addr,!1,Wm),Te(e,i)}}function Fw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Ow(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function kw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function Bw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function zw(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Vw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function Gw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function Hw(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function oc(n){return n.version===0&&(n.compareFunction=Mu,n.needsUpdate=!0),n}function Ww(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?s=oc(hg):s=cg,e.setTexture2D(t||s,r)}function qw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||dg,r)}function Xw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_CUBE_SHADOW?s=oc(ug):s=pg,e.setTextureCube(t||s,r)}function Yw(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||fg,r)}function $w(n){switch(n){case 5126:return Cw;case 35664:return Iw;case 35665:return Pw;case 35666:return Nw;case 35674:return Lw;case 35675:return Dw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return kw;case 35669:case 35673:return Bw;case 5125:return zw;case 36294:return Vw;case 36295:return Gw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return Yw}}function Zw(n,t){n.uniform1fv(this.addr,t)}function Jw(n,t){let e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function Kw(n,t){let e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function Qw(n,t){let e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function jw(n,t){let e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function t1(n,t){let e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function e1(n,t){let e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function n1(n,t){n.uniform1iv(this.addr,t)}function i1(n,t){n.uniform2iv(this.addr,t)}function r1(n,t){n.uniform3iv(this.addr,t)}function s1(n,t){n.uniform4iv(this.addr,t)}function a1(n,t){n.uniform1uiv(this.addr,t)}function o1(n,t){n.uniform2uiv(this.addr,t)}function l1(n,t){n.uniform3uiv(this.addr,t)}function c1(n,t){n.uniform4uiv(this.addr,t)}function h1(n,t,e){let i=this.cache,r=t.length,s=ac(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=oc(hg):a=cg;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function u1(n,t,e){let i=this.cache,r=t.length,s=ac(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||dg,s[a])}function f1(n,t,e){let i=this.cache,r=t.length,s=ac(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=oc(ug):a=pg;for(let o=0;o!==r;++o)e.setTextureCube(t[o]||a,s[o])}function d1(n,t,e){let i=this.cache,r=t.length,s=ac(e,r);we(i,s)||(n.uniform1iv(this.addr,s),Te(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||fg,s[a])}function p1(n){switch(n){case 5126:return Zw;case 35664:return Jw;case 35665:return Kw;case 35666:return Qw;case 35674:return jw;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return a1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return d1}}var Fu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$w(e.type)}},Ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p1(e.type)}},ku=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],i)}}},Du=/(\w+)(\])?(\[|\.)?/g;function Ym(n,t){n.seq.push(t),n.map[t.id]=t}function m1(n,t,e){let i=n.name,r=i.length;for(Du.lastIndex=0;;){let s=Du.exec(i),a=Du.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ym(e,l===void 0?new Fu(o,n,t):new Ou(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ku(o),Ym(e,f)),e=f}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);m1(o,c,this)}let r=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&i.push(a)}return i}};function $m(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var g1=37297,_1=0;function x1(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Zm=new Zt;function y1(n){le._getMatrix(Zm,le.workingColorSpace,n);let t=`mat3( ${Zm.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case Us:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Jm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+x1(n.getShaderSource(t),o)}else return s}function v1(n,t){let e=y1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var b1={[su]:"Linear",[au]:"Reinhard",[ou]:"Cineon",[lu]:"ACESFilmic",[hu]:"AgX",[uu]:"Neutral",[cu]:"Custom"};function M1(n,t){let e=b1[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new O;function S1(){le.getLuminanceCoefficients(ic);let n=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function T1(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function A1(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ma(n){return n!==""}function Km(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(n){return n.replace(E1,R1)}function R1(n,t){let e=ne[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bu(e)}var C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(n){return n.replace(C1,I1)}function I1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tg(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var P1={[aa]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function N1(n){return P1[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L1={[Qr]:"ENVMAP_MODE_REFRACTION"};function D1(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":L1[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var U1={[ru]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[ym]:"ENVMAP_BLENDING_ADD"};function F1(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":U1[n.combine]||"ENVMAP_BLENDING_NONE"}function O1(n,t,e,i){let r=n.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=N1(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=D1(e),f=F1(e),u=w1(e),d=T1(s),_=r.createProgram(),x,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ma).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(x=[tg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[tg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ne.tonemapping_pars_fragment:"",e.toneMapping!==kn?M1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),S1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ma).join(`
`)),a=Bu(a),a=Km(a,e),a=Qm(a,e),o=Bu(o),o=Km(o,e),o=Qm(o,e),a=jm(a),o=jm(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+x+a,E=p+m+o,v=$m(r,r.VERTEX_SHADER,M),T=$m(r,r.FRAGMENT_SHADER,E);r.attachShader(_,v),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){let F=r.getProgramInfoLog(_)||"",D=r.getShaderInfoLog(v)||"",k=r.getShaderInfoLog(T)||"",C=F.trim(),W=D.trim(),Y=k.trim(),H=!0,nt=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,v,T);else{let q=Jm(r,v,"vertex"),Z=Jm(r,T,"fragment");Yt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+q+`
`+Z)}else C!==""?qt("WebGLProgram: Program Info Log:",C):(W===""||Y==="")&&(nt=!1);nt&&(P.diagnostics={runnable:H,programLog:C,vertexShader:{log:W,prefix:x},fragmentShader:{log:Y,prefix:m}})}r.deleteShader(v),r.deleteShader(T),g=new ts(r,_),S=A1(r,_)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,g1)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=T,this}var k1=0,zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Vu(t),e.set(t,i)),i}},Vu=class{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}};function B1(n){return n===Ei||n===fa||n===da}function z1(n,t,e,i,r,s){let a=new Vr,o=new zu,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,S,U,P,F,D){let k=P.fog,C=F.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=t.get(g.envMap||W,Y),nt=u[g.type],q=i.precision;g.precision!==null&&(q=i.getMaxPrecision(g.precision),q!==g.precision&&qt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));let Z=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,it=Z!==void 0?Z.length:0,Ct=0;C.morphAttributes.position!==void 0&&(Ct=1),C.morphAttributes.normal!==void 0&&(Ct=2),C.morphAttributes.color!==void 0&&(Ct=3);let Bt,J,dt,Et;if(nt){let Tt=zn[nt];Bt=Tt.vertexShader,J=Tt.fragmentShader}else{Bt=g.vertexShader,J=g.fragmentShader;let Tt=o.getVertexShaderStage(g),pe=o.getFragmentShaderStage(g);o.update(g,Tt,pe),dt=Tt.id,Et=pe.id}let et=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),zt=F.isInstancedMesh===!0,L=F.isBatchedMesh===!0,G=!!g.map,st=!!g.matcap,lt=!!H,at=lt&&H.isPMREMTexture===!0,ht=!!g.aoMap,It=!!g.lightMap,Pt=!!g.bumpMap&&g.wireframe===!1,wt=!!g.normalMap,Jt=!!g.displacementMap,Wt=!!g.emissiveMap,St=!!g.metalnessMap,Xt=!!g.roughnessMap,Ut=g.anisotropy>0,R=g.clearcoat>0,$t=g.diffuseRoughness>0,te=g.dispersion>0,se=g.retroreflectivity>0,_t=g.iridescence>0,me=g.sheen>0,Ft=g.transmission>0,Ot=Ut&&!!g.anisotropyMap,w=R&&!!g.clearcoatMap,y=R&&!!g.clearcoatNormalMap,z=R&&!!g.clearcoatRoughnessMap,ct=$t&&!!g.diffuseRoughnessMap,tt=_t&&!!g.iridescenceMap,mt=_t&&!!g.iridescenceThicknessMap,bt=me&&!!g.sheenColorMap,K=me&&!!g.sheenRoughnessMap,Q=!!g.specularMap,xt=!!g.specularColorMap,I=!!g.specularIntensityMap,j=Ft&&!!g.transmissionMap,$=Ft&&!!g.thicknessMap,yt=!!g.gradientMap,ft=!!g.alphaMap,gt=g.alphaTest>0,Vt=!!g.alphaHash,ee=!!g.extensions,ut=kn;g.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ut=n.toneMapping);let Ht=at?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Qt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Bt,fragmentShader:J,defines:g.defines,customVertexShaderID:dt,customFragmentShaderID:Et,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:L,batchingColor:L&&F._colorsTexture!==null,instancing:zt,instancingColor:zt&&F.instanceColor!==null,instancingMorph:zt&&F.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:G,matcap:st,envMap:lt,envMapMode:lt&&H.mapping,envMapPMREM:at,envMapMaxLod:at?Ht.length-1:null,envMapSize:at?Ht[0].width:null,aoMap:ht,lightMap:It,bumpMap:Pt,normalMap:wt,displacementMap:Jt,emissiveMap:Wt,normalMapObjectSpace:wt&&g.normalMapType===Mm,normalMapTangentSpace:wt&&g.normalMapType===tc,packedNormalMap:wt&&g.normalMapType===tc&&B1(g.normalMap.format),metalnessMap:St,roughnessMap:Xt,anisotropy:Ut,anisotropyMap:Ot,clearcoat:R,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:$t,diffuseRoughnessMap:ct,dispersion:te,retroreflection:se,iridescence:_t,iridescenceMap:tt,iridescenceThicknessMap:mt,sheen:me,sheenColorMap:bt,sheenRoughnessMap:K,specularMap:Q,specularColorMap:xt,specularIntensityMap:I,transmission:Ft,transmissionMap:j,thicknessMap:$,gradientMap:yt,opaque:g.transparent===!1&&g.blending===Kr&&g.alphaToCoverage===!1,alphaMap:ft,alphaTest:gt,alphaHash:Vt,combine:g.combine,mapUv:G&&d(g.map.channel),aoMapUv:ht&&d(g.aoMap.channel),lightMapUv:It&&d(g.lightMap.channel),bumpMapUv:Pt&&d(g.bumpMap.channel),normalMapUv:wt&&d(g.normalMap.channel),displacementMapUv:Jt&&d(g.displacementMap.channel),emissiveMapUv:Wt&&d(g.emissiveMap.channel),metalnessMapUv:St&&d(g.metalnessMap.channel),roughnessMapUv:Xt&&d(g.roughnessMap.channel),anisotropyMapUv:Ot&&d(g.anisotropyMap.channel),clearcoatMapUv:w&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(g.sheenRoughnessMap.channel),specularMapUv:Q&&d(g.specularMap.channel),specularColorMapUv:xt&&d(g.specularColorMap.channel),specularIntensityMapUv:I&&d(g.specularIntensityMap.channel),transmissionMapUv:j&&d(g.transmissionMap.channel),thicknessMapUv:$&&d(g.thicknessMap.channel),alphaMapUv:ft&&d(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(wt||Ut),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!C.attributes.uv&&(G||ft),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&wt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Ct,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Tt=>Tt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:G&&g.map.isVideoTexture===!0&&le.getTransfer(g.map.colorSpace)===de,decodeVideoTextureEmissive:Wt&&g.emissiveMap.isVideoTexture===!0&&le.getTransfer(g.emissiveMap.colorSpace)===de,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===On,flipSided:g.side===Ue,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ee&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&g.extensions.multiDraw===!0||L)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function x(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)S.push(U),S.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(m(S,g),p(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function m(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function p(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let S=u[g.type],U;if(S){let P=zn[S];U=Um.clone(P.uniforms)}else U=g.uniforms;return U}function E(g,S){let U=h.get(S);return U!==void 0?++U.usedTimes:(U=new O1(n,S,g,r),l.push(U),h.set(S,U)),U}function v(g){if(--g.usedTimes===0){let S=l.indexOf(g);l[S]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:M,acquireProgram:E,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:A}}function V1(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function G1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function eg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ng(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,x,m,p){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},n[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=_,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,d,_,x,m,p,M){M.reversedDepth===!0&&(m=-m);let E=o(u,d,_,x,m,p);_.transmission>0?i.push(E):_.transparent===!0?r.push(E):e.push(E)}function l(u,d,_,x,m,p){let M=o(u,d,_,x,m,p);_.transmission>0?i.unshift(M):_.transparent===!0?r.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||G1),i.length>1&&i.sort(d||eg),r.length>1&&r.sort(d||eg)}function f(){for(let u=t,d=n.length;u<d;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:h}}function H1(){let n=new WeakMap;function t(i,r){let s=n.get(i),a;return s===void 0?(a=new ng,n.set(i,[a])):r>=s.length?(a=new ng,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function W1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new jt};break;case"SpotLight":e={position:new O,direction:new O,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function q1(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var X1=0;function Y1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $1(n){let t=new W1,e=q1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let r=new O,s=new _e,a=new _e;function o(l){let h=0,f=0,u=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,M=0,E=0,v=0,T=0,A=0,g=0,S=0,U=0,P=0;l.sort(Y1);for(let D=0,k=l.length;D<k;D++){let C=l[D],W=C.color,Y=C.intensity,H=C.distance,nt=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ei?nt=C.shadow.map.texture:nt=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=W.r*Y,f+=W.g*Y,u+=W.b*Y;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],Y);P++}else if(C.isSunLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,it=e.get(C);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[_]=it,i.sunShadowMap[_]=nt;let Ct=Z.getViewportCount();for(let Bt=0;Bt<Ct;Bt++)i.sunShadowMatrix[x+Bt]=Z.getMatrix(Bt),i.sunShadowCascade[x+Bt]=Z._cascadeData[Bt];x+=Ct,_++}i.sun[d]=q,d++}else if(C.isDirectionalLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Z=C.shadow,it=e.get(C);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=C.shadow.matrix,T++}i.directional[m]=q,m++}else if(C.isSpotLight){let q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(W).multiplyScalar(Y),q.distance=H,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[M]=q;let Z=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,Z.updateMatrices(C),C.castShadow&&U++),i.spotLightMatrix[M]=Z.matrix,C.castShadow){let it=e.get(C);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,i.spotShadow[M]=it,i.spotShadowMap[M]=nt,g++}M++}else if(C.isRectAreaLight){let q=t.get(C);q.color.copy(W).multiplyScalar(Y),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=q,E++}else if(C.isPointLight){let q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let Z=C.shadow,it=e.get(C);it.shadowIntensity=Z.intensity,it.shadowBias=Z.bias,it.shadowNormalBias=Z.normalBias,it.shadowRadius=Z.radius,it.shadowMapSize=Z.mapSize,it.shadowCameraNear=Z.camera.near,it.shadowCameraFar=Z.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=C.shadow.matrix,A++}i.point[p]=q,p++}else if(C.isHemisphereLight){let q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(Y),q.groundColor.copy(C.groundColor).multiplyScalar(Y),i.hemi[v]=q,v++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let F=i.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==M||F.rectAreaLength!==E||F.hemiLength!==v||F.numSunShadows!==_||F.numDirectionalShadows!==T||F.numPointShadows!==A||F.numSpotShadows!==g||F.numSpotMaps!==S||F.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=M,i.rectArea.length=E,i.point.length=p,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+S-U,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=P,F.sunLength=d,F.directionalLength=m,F.pointLength=p,F.spotLength=M,F.rectAreaLength=E,F.hemiLength=v,F.numSunShadows=_,F.numDirectionalShadows=T,F.numPointShadows=A,F.numSpotShadows=g,F.numSpotMaps=S,F.numLightProbes=P,i.version=X1++)}function c(l,h){let f=0,u=0,d=0,_=0,x=0,m=0,p=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){let v=l[M];if(v.isSunLight){let T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),f++}else if(v.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),u++}else if(v.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),_++}else if(v.isRectAreaLight){let T=i.rectArea[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function ig(n){let t=new $1(n),e=[],i=[],r=[];function s(f){h.camera=f,e.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),r.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Z1(n){let t=new WeakMap;function e(r,s=0){let a=t.get(r),o;return a===void 0?(o=new ig(n),t.set(r,[o])):s>=a.length?(o=new ig(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var J1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q1=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],j1=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],rg=new _e,pa=new O,Uu=new O;function tT(n,t,e){let i=new yi,r=new Gt,s=new Gt,a=new ve,o=new el,c=new nl,l={},h=e.maxTextureSize,f={[Ai]:Ue,[Ue]:Ai,[On]:On},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:J1,fragmentShader:K1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new hn;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new un(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let p=this.type;this.render=function(A,g,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===jp&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);let U=n.getRenderTarget(),P=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),D=n.state;D.setBlending(qi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==this.type;k&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(W=>W.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,W=A.length;C<W;C++){let Y=A[C],H=Y.shadow;if(H===void 0){qt("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let nt=H.getFrameExtents();r.multiply(nt),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/nt.x),r.x=s.x*nt.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/nt.y),r.y=s.y*nt.y,H.mapSize.y=s.y));let q=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Jr){if(Y.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new cn(r.x,r.y,{format:Ei,type:Tn,minFilter:Je,magFilter:Je,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new ni(r.x,r.y,wn),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=ti,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pe,H.map.depthTexture.magFilter=Pe}else Y.isPointLight?(H.map=new ga(r.x),H.map.depthTexture=new Ys(r.x,Sn)):(H.map=new cn(r.x,r.y),H.map.depthTexture=new ni(r.x,r.y,Sn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=ti,this.type===aa?(H.map.depthTexture.compareFunction=q?bu:vu,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pe,H.map.depthTexture.magFilter=Pe);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,S);let it=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Ct=0;Ct<Z;Ct++){let Bt=H.getCamera(Ct);if(Y.isPointLight){let J=H.camera,dt=H.matrix,Et=Y.distance||J.far;Et!==J.far&&(J.far=Et,J.updateProjectionMatrix()),pa.setFromMatrixPosition(Y.matrixWorld),J.position.copy(pa),Uu.copy(J.position),Uu.add(Q1[Ct]),J.up.copy(j1[Ct]),J.lookAt(Uu),J.updateMatrixWorld(),dt.makeTranslation(-pa.x,-pa.y,-pa.z),rg.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(rg,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Ct),n.clear();else{Ct===0&&(n.setRenderTarget(H.map),n.clear());let J=H.getViewport(Ct);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),D.viewport(a)}i=H.getFrustum(Ct),v(g,S,Bt,Y,it,this.type)}H.isPointLightShadow!==!0&&this.type===Jr&&M(H,S),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(U,P,F)};function M(A,g){let S=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new cn(r.x,r.y,{format:Ei,type:Tn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(g,null,S,u,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(g,null,S,d,x,null)}function E(A,g,S,U){let P=null,F=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)P=F;else if(P=S.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let D=P.uuid,k=g.uuid,C=l[D];C===void 0&&(C={},l[D]=C);let W=C[k];W===void 0&&(W=P.clone(),C[k]=W,g.addEventListener("dispose",T)),P=W}if(P.visible=g.visible,P.wireframe=g.wireframe,U===Jr?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:f[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=n.properties.get(P);D.light=S}return P}function v(A,g,S,U,P,F){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Jr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let C=t.update(A),W=A.material;if(Array.isArray(W)){let Y=C.groups;for(let H=0,nt=Y.length;H<nt;H++){let q=Y[H],Z=W[q.materialIndex];if(Z&&Z.visible){let it=E(A,Z,U,F);A.onBeforeShadow(n,A,g,S,C,it,q),n.renderBufferDirect(S,null,C,it,A,q),A.onAfterShadow(n,A,g,S,C,it,q)}}}else if(W.visible){let Y=E(A,W,U,F);A.onBeforeShadow(n,A,g,S,C,Y,null),n.renderBufferDirect(S,null,C,Y,A,null),A.onAfterShadow(n,A,g,S,C,Y,null)}}let k=A.children;for(let C=0,W=k.length;C<W;C++)v(k[C],g,S,U,P,F)}function T(A){A.target.removeEventListener("dispose",T);for(let S in l){let U=l[S],P=A.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function eT(n,t){function e(){let I=!1,j=new ve,$=null,yt=new ve(0,0,0,0);return{setMask:function(ft){$!==ft&&!I&&(n.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){I=ft},setClear:function(ft,gt,Vt,ee,ut){ut===!0&&(ft*=ee,gt*=ee,Vt*=ee),j.set(ft,gt,Vt,ee),yt.equals(j)===!1&&(n.clearColor(ft,gt,Vt,ee),yt.copy(j))},reset:function(){I=!1,$=null,yt.set(-1,0,0,0)}}}function i(){let I=!1,j=!1,$=null,yt=null,ft=null;return{setReversed:function(gt){if(j!==gt){let Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),j=gt;let ee=ft;ft=null,this.setClear(ee)}},getReversed:function(){return j},setTest:function(gt){gt?ot(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(gt){$!==gt&&!I&&(n.depthMask(gt),$=gt)},setFunc:function(gt){if(j&&(gt=Nm[gt]),yt!==gt){switch(gt){case Fo:n.depthFunc(n.NEVER);break;case Oo:n.depthFunc(n.ALWAYS);break;case ko:n.depthFunc(n.LESS);break;case Fr:n.depthFunc(n.LEQUAL);break;case Bo:n.depthFunc(n.EQUAL);break;case zo:n.depthFunc(n.GEQUAL);break;case Vo:n.depthFunc(n.GREATER);break;case Go:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}yt=gt}},setLocked:function(gt){I=gt},setClear:function(gt){ft!==gt&&(ft=gt,j&&(gt=1-gt),n.clearDepth(gt))},reset:function(){I=!1,$=null,yt=null,ft=null,j=!1}}}function r(){let I=!1,j=null,$=null,yt=null,ft=null,gt=null,Vt=null,ee=null,ut=null;return{setTest:function(Ht){I||(Ht?ot(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Ht){j!==Ht&&!I&&(n.stencilMask(Ht),j=Ht)},setFunc:function(Ht,Qt,Tt){($!==Ht||yt!==Qt||ft!==Tt)&&(n.stencilFunc(Ht,Qt,Tt),$=Ht,yt=Qt,ft=Tt)},setOp:function(Ht,Qt,Tt){(gt!==Ht||Vt!==Qt||ee!==Tt)&&(n.stencilOp(Ht,Qt,Tt),gt=Ht,Vt=Qt,ee=Tt)},setLocked:function(Ht){I=Ht},setClear:function(Ht){ut!==Ht&&(n.clearStencil(Ht),ut=Ht)},reset:function(){I=!1,j=null,$=null,yt=null,ft=null,gt=null,Vt=null,ee=null,ut=null}}}let s=new e,a=new i,o=new r,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,_=[],x=null,m=!1,p=null,M=null,E=null,v=null,T=null,A=null,g=null,S=new jt(0,0,0),U=0,P=!1,F=null,D=null,k=null,C=null,W=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=nt>=1):q.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=nt>=2);let Z=null,it={},Ct=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),J=new ve().fromArray(Ct),dt=new ve().fromArray(Bt);function Et(I,j,$,yt){let ft=new Uint8Array(4),gt=n.createTexture();n.bindTexture(I,gt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<$;Vt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(j,0,n.RGBA,1,1,yt,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(j+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return gt}let et={};et[n.TEXTURE_2D]=Et(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=Et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ot(n.DEPTH_TEST),a.setFunc(Fr),Pt(!1),wt(Qh),ot(n.CULL_FACE),ht(qi);function ot(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function zt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function L(I,j){return u[I]!==j?(n.bindFramebuffer(I,j),u[I]=j,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=j),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=j),!0):!1}function G(I,j){let $=_,yt=!1;if(I){$=d.get(j),$===void 0&&($=[],d.set(j,$));let ft=I.textures;if($.length!==ft.length||$[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Vt=ft.length;gt<Vt;gt++)$[gt]=n.COLOR_ATTACHMENT0+gt;$.length=ft.length,yt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,yt=!0);yt&&n.drawBuffers($)}function st(I){return x!==I?(n.useProgram(I),x=I,!0):!1}let lt={[Xi]:n.FUNC_ADD,[em]:n.FUNC_SUBTRACT,[nm]:n.FUNC_REVERSE_SUBTRACT};lt[im]=n.MIN,lt[rm]=n.MAX;let at={[sm]:n.ZERO,[am]:n.ONE,[om]:n.SRC_COLOR,[nu]:n.SRC_ALPHA,[dm]:n.SRC_ALPHA_SATURATE,[um]:n.DST_COLOR,[cm]:n.DST_ALPHA,[lm]:n.ONE_MINUS_SRC_COLOR,[iu]:n.ONE_MINUS_SRC_ALPHA,[fm]:n.ONE_MINUS_DST_COLOR,[hm]:n.ONE_MINUS_DST_ALPHA,[pm]:n.CONSTANT_COLOR,[mm]:n.ONE_MINUS_CONSTANT_COLOR,[gm]:n.CONSTANT_ALPHA,[_m]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(I,j,$,yt,ft,gt,Vt,ee,ut,Ht){if(I===qi){m===!0&&(zt(n.BLEND),m=!1);return}if(m===!1&&(ot(n.BLEND),m=!0),I!==tm){if(I!==p||Ht!==P){if((M!==Xi||T!==Xi)&&(n.blendEquation(n.FUNC_ADD),M=Xi,T=Xi),Ht)switch(I){case Kr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",I);break}else switch(I){case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tu:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",I);break}E=null,v=null,A=null,g=null,S.set(0,0,0),U=0,p=I,P=Ht}return}ft=ft||j,gt=gt||$,Vt=Vt||yt,(j!==M||ft!==T)&&(n.blendEquationSeparate(lt[j],lt[ft]),M=j,T=ft),($!==E||yt!==v||gt!==A||Vt!==g)&&(n.blendFuncSeparate(at[$],at[yt],at[gt],at[Vt]),E=$,v=yt,A=gt,g=Vt),(ee.equals(S)===!1||ut!==U)&&(n.blendColor(ee.r,ee.g,ee.b,ut),S.copy(ee),U=ut),p=I,P=!1}function It(I,j){I.side===On?zt(n.CULL_FACE):ot(n.CULL_FACE);let $=I.side===Ue;j&&($=!$),Pt($),I.blending===Kr&&I.transparent===!1?ht(qi):ht(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);let yt=I.stencilWrite;o.setTest(yt),yt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Wt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(I){F!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),F=I)}function wt(I){I!==Kp?(ot(n.CULL_FACE),I!==D&&(I===Qh?n.cullFace(n.BACK):I===Qp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),D=I}function Jt(I){I!==k&&(H&&n.lineWidth(I),k=I)}function Wt(I,j,$){I?(ot(n.POLYGON_OFFSET_FILL),(C!==j||W!==$)&&(C=j,W=$,a.getReversed()&&(j=-j,$=-$),n.polygonOffset(j,$))):zt(n.POLYGON_OFFSET_FILL)}function St(I){I?ot(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function Xt(I){I===void 0&&(I=n.TEXTURE0+Y-1),Z!==I&&(n.activeTexture(I),Z=I)}function Ut(I,j,$){$===void 0&&(Z===null?$=n.TEXTURE0+Y-1:$=Z);let yt=it[$];yt===void 0&&(yt={type:void 0,texture:void 0},it[$]=yt),(yt.type!==I||yt.texture!==j)&&(Z!==$&&(n.activeTexture($),Z=$),n.bindTexture(I,j||et[I]),yt.type=I,yt.texture=j)}function R(){let I=it[Z];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $t(){try{n.compressedTexImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function te(){try{n.compressedTexImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function se(){try{n.texSubImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function _t(){try{n.texSubImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function me(){try{n.compressedTexSubImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function Ft(){try{n.compressedTexSubImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function Ot(){try{n.texStorage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function w(){try{n.texStorage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function y(){try{n.texImage2D(...arguments)}catch(I){Yt("WebGLState:",I)}}function z(){try{n.texImage3D(...arguments)}catch(I){Yt("WebGLState:",I)}}function ct(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function tt(I,j){f[I]!==j&&(n.pixelStorei(I,j),f[I]=j)}function mt(I){J.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function bt(I){dt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),dt.copy(I))}function K(I,j){let $=l.get(j);$===void 0&&($=new WeakMap,l.set(j,$));let yt=$.get(I);yt===void 0&&(yt=n.getUniformBlockIndex(j,I.name),n.uniformBlockBinding(j,yt,yt),$.set(I,yt))}function Q(I,j,$){let ft=l.get(j).get(I);c[ft]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,ft,$),c[ft]=$)}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Z=null,it={},u={},c={},d=new WeakMap,_=[],x=null,m=!1,p=null,M=null,E=null,v=null,T=null,A=null,g=null,S=new jt(0,0,0),U=0,P=!1,F=null,D=null,k=null,C=null,W=null,J.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ot,disable:zt,bindFramebuffer:L,drawBuffers:G,useProgram:st,setBlending:ht,setMaterial:It,setFlipSided:Pt,setCullFace:wt,setLineWidth:Jt,setPolygonOffset:Wt,setScissorTest:St,activeTexture:Xt,bindTexture:Ut,unbindTexture:R,compressedTexImage2D:$t,compressedTexImage3D:te,texImage2D:y,texImage3D:z,pixelStorei:tt,getParameter:ct,updateUBOMapping:K,uniformBlockBinding:Q,texStorage2D:Ot,texStorage3D:w,texSubImage2D:se,texSubImage3D:_t,compressedTexSubImage2D:me,compressedTexSubImage3D:Ft,scissor:mt,viewport:bt,reset:xt}}function nT(n,t,e,i,r,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,h=new WeakMap,f=new Set,u,d=new WeakMap,_=new Set,x=new FinalizationRegistry(w=>_.delete(w)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,y){return m?new OffscreenCanvas(w,y):Fs("canvas")}function M(w,y,z){let ct=1,tt=Ot(w);if((tt.width>z||tt.height>z)&&(ct=z/Math.max(tt.width,tt.height)),ct<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let mt=Math.floor(ct*tt.width),bt=Math.floor(ct*tt.height);u===void 0&&(u=p(mt,bt));let K=y?p(mt,bt):u;return K.width=mt,K.height=bt,K.getContext("2d").drawImage(w,0,0,mt,bt),qt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+mt+"x"+bt+")."),K}else return"data"in w&&qt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function E(w){return w.generateMipmaps}function v(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(w,y,z,ct,tt,mt=!1){if(w!==null){if(n[w]!==void 0)return n[w];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let bt;ct&&(bt=t.get("EXT_texture_norm16"),bt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===n.RED&&(z===n.FLOAT&&(K=n.R32F),z===n.HALF_FLOAT&&(K=n.R16F),z===n.UNSIGNED_BYTE&&(K=n.R8),z===n.UNSIGNED_SHORT&&bt&&(K=bt.R16_EXT),z===n.SHORT&&bt&&(K=bt.R16_SNORM_EXT)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.R8UI),z===n.UNSIGNED_SHORT&&(K=n.R16UI),z===n.UNSIGNED_INT&&(K=n.R32UI),z===n.BYTE&&(K=n.R8I),z===n.SHORT&&(K=n.R16I),z===n.INT&&(K=n.R32I)),y===n.RG&&(z===n.FLOAT&&(K=n.RG32F),z===n.HALF_FLOAT&&(K=n.RG16F),z===n.UNSIGNED_BYTE&&(K=n.RG8),z===n.UNSIGNED_SHORT&&bt&&(K=bt.RG16_EXT),z===n.SHORT&&bt&&(K=bt.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RG8UI),z===n.UNSIGNED_SHORT&&(K=n.RG16UI),z===n.UNSIGNED_INT&&(K=n.RG32UI),z===n.BYTE&&(K=n.RG8I),z===n.SHORT&&(K=n.RG16I),z===n.INT&&(K=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGB8UI),z===n.UNSIGNED_SHORT&&(K=n.RGB16UI),z===n.UNSIGNED_INT&&(K=n.RGB32UI),z===n.BYTE&&(K=n.RGB8I),z===n.SHORT&&(K=n.RGB16I),z===n.INT&&(K=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),z===n.UNSIGNED_INT&&(K=n.RGBA32UI),z===n.BYTE&&(K=n.RGBA8I),z===n.SHORT&&(K=n.RGBA16I),z===n.INT&&(K=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_SHORT&&bt&&(K=bt.RGB16_EXT),z===n.SHORT&&bt&&(K=bt.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),y===n.RGBA){let Q=mt?Us:le.getTransfer(tt);z===n.FLOAT&&(K=n.RGBA32F),z===n.HALF_FLOAT&&(K=n.RGBA16F),z===n.UNSIGNED_BYTE&&(K=Q===de?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&bt&&(K=bt.RGBA16_EXT),z===n.SHORT&&bt&&(K=bt.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(w,y){let z;return w?y===null||y===Sn||y===$i?z=n.DEPTH24_STENCIL8:y===wn?z=n.DEPTH32F_STENCIL8:y===jr&&(z=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Sn||y===$i?z=n.DEPTH_COMPONENT24:y===wn?z=n.DEPTH_COMPONENT32F:y===jr&&(z=n.DEPTH_COMPONENT16),z}function S(w,y){return E(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pe&&w.minFilter!==Je?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function U(w){let y=new WeakRef(w);i.get(w).__ref=y,_.add(y),x.register(w,y,y)}function P(w){let y=i.get(w).__ref;y!==void 0&&(_.delete(y),x.unregister(y))}function F(w){k(w.target)}function D(w){C(w.target)}function k(w){w.removeEventListener("dispose",F),P(w),Y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function C(w){w.removeEventListener("dispose",D),P(w),nt(w)}function W(){for(let w of _){let y=w.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):k(y))}_.clear(),f.clear()}function Y(w){let y=i.get(w);if(y.__webglInit===void 0)return;let z=w.source,ct=d.get(z);if(ct){let tt=ct[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&H(w),Object.keys(ct).length===0&&d.delete(z)}i.remove(w)}function H(w){let y=i.get(w);n.deleteTexture(y.__webglTexture);let z=w.source,ct=d.get(z);delete ct[y.__cacheKey],a.memory.textures--}function nt(w){let y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=w.depthTexture;if(z&&z.renderTarget===w&&k(z),w.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let mt=0;mt<y.__webglFramebuffer[tt].length;mt++)n.deleteFramebuffer(y.__webglFramebuffer[tt][mt]);else n.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)n.deleteFramebuffer(y.__webglFramebuffer[tt]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ct=w.textures;for(let tt=0,mt=ct.length;tt<mt;tt++){let bt=i.get(ct[tt]);bt.__webglTexture&&(n.deleteTexture(bt.__webglTexture),a.memory.textures--),i.remove(ct[tt])}i.remove(w)}let q=0;function Z(){q=0}function it(){return q}function Ct(w){q=w}function Bt(){let w=q;return w>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),q+=1,w}function J(w){let y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function dt(w,y){let z=i.get(w);if(w.isVideoTexture&&me(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let ct=w.image;if(ct===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{It(z,w,y);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function Et(w,y){let z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){It(z,w,y);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function et(w,y){let z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){It(z,w,y);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function ot(w,y){let z=i.get(w);if(w.version>0&&z.__version!==w.version){Pt(z,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}let zt={[Ho]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},L={[Pe]:n.NEAREST,[vm]:n.NEAREST_MIPMAP_NEAREST,[oa]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[_l]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},G={[wm]:n.NEVER,[Mu]:n.ALWAYS,[Tm]:n.LESS,[vu]:n.LEQUAL,[Am]:n.EQUAL,[bu]:n.GEQUAL,[Em]:n.GREATER,[Rm]:n.NOTEQUAL};function st(w,y){if(y.type===wn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Je||y.magFilter===_l||y.magFilter===oa||y.magFilter===ii||y.minFilter===Je||y.minFilter===_l||y.minFilter===oa||y.minFilter===ii)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,zt[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,zt[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,zt[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,L[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,L[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,G[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pe||y.minFilter!==oa&&y.minFilter!==ii||y.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(w,y){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",F),U(y));let ct=y.source,tt=d.get(ct);tt===void 0&&(tt={},d.set(ct,tt));let mt=J(y);if(mt!==w.__cacheKey){tt[mt]===void 0&&(tt[mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[mt].usedTimes++;let bt=tt[w.__cacheKey];bt!==void 0&&(tt[w.__cacheKey].usedTimes--,bt.usedTimes===0&&H(y)),w.__cacheKey=mt,w.__webglTexture=tt[mt].texture}return z}function at(w,y,z){return Math.floor(Math.floor(w/z)/y)}function ht(w,y,z,ct){let mt=w.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,ct,y.data);else{mt.sort((I,j)=>I.start-j.start);let bt=0;for(let I=1;I<mt.length;I++){let j=mt[bt],$=mt[I],yt=j.start+j.count,ft=at($.start,y.width,4),gt=at(j.start,y.width,4);$.start<=yt+1&&ft===gt&&at($.start+$.count-1,y.width,4)===ft?j.count=Math.max(j.count,$.start+$.count-j.start):(++bt,mt[bt]=$)}mt.length=bt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),xt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let I=0,j=mt.length;I<j;I++){let $=mt[I],yt=Math.floor($.start/4),ft=Math.ceil($.count/4),gt=yt%y.width,Vt=Math.floor(yt/y.width),ee=ft,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Vt),e.texSubImage2D(n.TEXTURE_2D,0,gt,Vt,ee,ut,z,ct,y.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function It(w,y,z){let ct=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ct=n.TEXTURE_3D);let tt=lt(w,y),mt=y.source;e.bindTexture(ct,w.__webglTexture,n.TEXTURE0+z);let bt=i.get(mt);if(mt.version!==bt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ut=le.getPrimaries(le.workingColorSpace),Ht=y.colorSpace===si?null:le.getPrimaries(y.colorSpace),Qt=y.colorSpace===si||ut===Ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=M(y.image,!1,r.maxTextureSize);Q=Ft(y,Q);let xt=s.convert(y.format,y.colorSpace),I=s.convert(y.type),j=A(y.internalFormat,xt,I,y.normalized,y.colorSpace,y.isVideoTexture);st(ct,y);let $,yt=y.mipmaps,ft=y.isVideoTexture!==!0,gt=bt.__version===void 0||tt===!0,Vt=mt.dataReady,ee=S(y,Q);if(y.isDepthTexture)j=g(y.format===ri,y.type),gt&&(ft?e.texStorage2D(n.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,xt,I,null));else if(y.isDataTexture)if(yt.length>0){ft&&gt&&e.texStorage2D(n.TEXTURE_2D,ee,j,yt[0].width,yt[0].height);for(let ut=0,Ht=yt.length;ut<Ht;ut++)$=yt[ut],ft?Vt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,$.width,$.height,xt,I,$.data):e.texImage2D(n.TEXTURE_2D,ut,j,$.width,$.height,0,xt,I,$.data);y.generateMipmaps=!1}else ft?(gt&&e.texStorage2D(n.TEXTURE_2D,ee,j,Q.width,Q.height),Vt&&ht(y,Q,xt,I)):e.texImage2D(n.TEXTURE_2D,0,j,Q.width,Q.height,0,xt,I,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ft&&gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ee,j,yt[0].width,yt[0].height,Q.depth);for(let ut=0,Ht=yt.length;ut<Ht;ut++)if($=yt[ut],y.format!==An)if(xt!==null)if(ft){if(Vt)if(y.layerUpdates.size>0){let Qt=Lu($.width,$.height,y.format,y.type);for(let Tt of y.layerUpdates){let pe=$.data.subarray(Tt*Qt/$.data.BYTES_PER_ELEMENT,(Tt+1)*Qt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,Tt,$.width,$.height,1,xt,pe)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,$.width,$.height,Q.depth,xt,$.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,j,$.width,$.height,Q.depth,0,$.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Vt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,$.width,$.height,Q.depth,xt,I,$.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,j,$.width,$.height,Q.depth,0,xt,I,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ft&&gt&&e.texStorage2D(n.TEXTURE_2D,ee,j,yt[0].width,yt[0].height);for(let ut=0,Ht=yt.length;ut<Ht;ut++)$=yt[ut],y.format!==An?xt!==null?ft?Vt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,$.width,$.height,xt,$.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,j,$.width,$.height,0,$.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Vt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,$.width,$.height,xt,I,$.data):e.texImage2D(n.TEXTURE_2D,ut,j,$.width,$.height,0,xt,I,$.data)}else if(y.isDataArrayTexture)if(ft){if(gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ee,j,Q.width,Q.height,Q.depth),Vt)if(y.layerUpdates.size>0){let ut=Lu(Q.width,Q.height,y.format,y.type);for(let Ht of y.layerUpdates){let Qt=Q.data.subarray(Ht*ut/Q.data.BYTES_PER_ELEMENT,(Ht+1)*ut/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ht,Q.width,Q.height,1,xt,I,Qt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xt,I,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,xt,I,Q.data);else if(y.isData3DTexture)ft?(gt&&e.texStorage3D(n.TEXTURE_3D,ee,j,Q.width,Q.height,Q.depth),Vt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xt,I,Q.data)):e.texImage3D(n.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,xt,I,Q.data);else if(y.isFramebufferTexture){if(gt)if(ft)e.texStorage2D(n.TEXTURE_2D,ee,j,Q.width,Q.height);else{let ut=Q.width,Ht=Q.height;for(let Qt=0;Qt<ee;Qt++)e.texImage2D(n.TEXTURE_2D,Qt,j,ut,Ht,0,xt,I,null),ut>>=1,Ht>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),Q.parentNode!==ut){ut.appendChild(Q),f.add(y),ut.onpaint=Ht=>{let Qt=Ht.changedElements;for(let Tt of f)Qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Qt=n.RGBA,Tt=n.RGBA,pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Qt,Tt,pe,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(yt.length>0){if(ft&&gt){let ut=Ot(yt[0]);e.texStorage2D(n.TEXTURE_2D,ee,j,ut.width,ut.height)}for(let ut=0,Ht=yt.length;ut<Ht;ut++)$=yt[ut],ft?Vt&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,xt,I,$):e.texImage2D(n.TEXTURE_2D,ut,j,xt,I,$);y.generateMipmaps=!1}else if(ft){if(gt){let ut=Ot(Q);e.texStorage2D(n.TEXTURE_2D,ee,j,ut.width,ut.height)}Vt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,I,Q)}else e.texImage2D(n.TEXTURE_2D,0,j,xt,I,Q);E(y)&&y.mipmapsAutoUpdate===!0&&v(ct),bt.__version=mt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Pt(w,y,z){if(y.image.length!==6)return;let ct=lt(w,y),tt=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+z);let mt=i.get(tt);if(tt.version!==mt.__version||ct===!0){e.activeTexture(n.TEXTURE0+z);let bt=le.getPrimaries(le.workingColorSpace),K=y.colorSpace===si?null:le.getPrimaries(y.colorSpace),Q=y.colorSpace===si||bt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let xt=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,j=[];for(let Tt=0;Tt<6;Tt++)!xt&&!I?j[Tt]=M(y.image[Tt],!0,r.maxCubemapSize):j[Tt]=I?y.image[Tt].image:y.image[Tt],j[Tt]=Ft(y,j[Tt]);let $=j[0],yt=s.convert(y.format,y.colorSpace),ft=s.convert(y.type),gt=A(y.internalFormat,yt,ft,y.normalized,y.colorSpace),Vt=y.isVideoTexture!==!0,ee=mt.__version===void 0||ct===!0,ut=tt.dataReady,Ht=S(y,$);st(n.TEXTURE_CUBE_MAP,y);let Qt;if(y.isDepthTexture){if(gt=g(y.format===ri,y.type),ee)if(Vt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,gt,$.width,$.height);else for(let Tt=0;Tt<6;Tt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,$.width,$.height,0,yt,ft,null)}else if(xt){Vt&&ee&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,gt,$.width,$.height);for(let Tt=0;Tt<6;Tt++){Qt=j[Tt].mipmaps;for(let pe=0;pe<Qt.length;pe++){let Ee=Qt[pe];y.format!==An?yt!==null?Vt?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe,0,0,Ee.width,Ee.height,yt,Ee.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe,gt,Ee.width,Ee.height,0,Ee.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe,0,0,Ee.width,Ee.height,yt,ft,Ee.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe,gt,Ee.width,Ee.height,0,yt,ft,Ee.data)}}}else{if(Qt=y.mipmaps,Vt&&ee){Qt.length>0&&Ht++;let Tt=Ot(j[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ht,gt,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(I){Vt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,j[Tt].width,j[Tt].height,yt,ft,j[Tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,j[Tt].width,j[Tt].height,0,yt,ft,j[Tt].data);for(let pe=0;pe<Qt.length;pe++){let oi=Qt[pe].image[Tt].image;Vt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe+1,0,0,oi.width,oi.height,yt,ft,oi.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe+1,gt,oi.width,oi.height,0,yt,ft,oi.data)}}else{Vt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,yt,ft,j[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,gt,yt,ft,j[Tt]);for(let pe=0;pe<Qt.length;pe++){let Ee=Qt[pe];Vt?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe+1,0,0,yt,ft,Ee.image[Tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,pe+1,gt,yt,ft,Ee.image[Tt])}}}E(y)&&y.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),mt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function wt(w,y,z,ct,tt,mt){let bt=s.convert(z.format,z.colorSpace),K=s.convert(z.type),Q=A(z.internalFormat,bt,K,z.normalized,z.colorSpace),xt=i.get(y),I=i.get(z);if(I.__renderTarget=y,!xt.__hasExternalTextures){let j=Math.max(1,y.width>>mt),$=Math.max(1,y.height>>mt);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,mt,Q,j,$,y.depth,0,bt,K,null):e.texImage2D(tt,mt,Q,j,$,0,bt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),_t(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,tt,I.__webglTexture,0,se(y)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,tt,I.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Jt(w,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){let ct=y.depthTexture,tt=ct&&ct.isDepthTexture?ct.type:null,mt=g(y.stencilBuffer,tt),bt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se(y),mt,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,se(y),mt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,mt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,w)}else{let ct=y.textures;for(let tt=0;tt<ct.length;tt++){let mt=ct[tt],bt=s.convert(mt.format,mt.colorSpace),K=s.convert(mt.type),Q=A(mt.internalFormat,bt,K,mt.normalized,mt.colorSpace);_t(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se(y),Q,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,se(y),Q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Q,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Wt(w,y,z){let ct=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(y.depthTexture);tt.__renderTarget=y;let mt=ct?y.depthTexture.image[0]:y.depthTexture.image;(!tt.__webglTexture||mt.width!==y.width||mt.height!==y.height)&&(mt.width=y.width,mt.height=y.height,y.depthTexture.needsUpdate=!0),ct?ot(y.depthTexture,0):dt(y.depthTexture,0);let bt=tt.__webglTexture,K=se(y),Q=ct?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,xt=y.depthTexture.format===ri?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===ti)_t(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,Q,bt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,xt,Q,bt,0);else if(y.depthTexture.format===ri)_t(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,xt,Q,bt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,xt,Q,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(w){let y=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){let ct=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ct){let tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ct.removeEventListener("dispose",tt)};ct.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=ct}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let ct=0;ct<6;ct++)Wt(y.__webglFramebuffer[ct],w,ct);else w.texture.mipmaps.length>0?Wt(y.__webglFramebuffer[0],w,0):Wt(y.__webglFramebuffer,w,0);else if(z){y.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ct]),y.__webglDepthbuffer[ct]===void 0)y.__webglDepthbuffer[ct]=n.createRenderbuffer(),Jt(y.__webglDepthbuffer[ct],w,!1);else{let tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,mt)}}else if(w.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Jt(y.__webglDepthbuffer,w,!1);else{let tt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(w,y,z){let ct=i.get(w);y!==void 0&&wt(ct.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&St(w)}function Ut(w){let y=w.texture,z=i.get(w),ct=i.get(y);w.addEventListener("dispose",D),U(w);let tt=w.textures,mt=w.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=y.version,a.memory.textures++),mt){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[K][Q]=n.createFramebuffer()}else z.__webglFramebuffer[K]=n.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)z.__webglFramebuffer[K]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(bt)for(let K=0,Q=tt.length;K<Q;K++){let xt=i.get(tt[K]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&_t(w)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<tt.length;K++){let Q=tt[K];z.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let xt=s.convert(Q.format,Q.colorSpace),I=s.convert(Q.type),j=A(Q.internalFormat,xt,I,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),$=se(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,j,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,z.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Jt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),st(n.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)wt(z.__webglFramebuffer[K][Q],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else wt(z.__webglFramebuffer[K],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);E(y)?v(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let K=0,Q=tt.length;K<Q;K++){let xt=tt[K],I=i.get(xt),j=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,I.__webglTexture),st(j,xt),wt(z.__webglFramebuffer,w,xt,n.COLOR_ATTACHMENT0+K,j,0),E(xt)&&v(j)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,ct.__webglTexture),st(K,y),y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)wt(z.__webglFramebuffer[Q],w,y,n.COLOR_ATTACHMENT0,K,Q);else wt(z.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,K,0);E(y)?v(K):y.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}w.depthBuffer&&St(w)}function R(w){let y=w.textures;for(let z=0,ct=y.length;z<ct;z++){let tt=y[z];if(E(tt)&&tt.mipmapsAutoUpdate===!0){let mt=T(w),bt=i.get(tt).__webglTexture;e.bindTexture(mt,bt),v(mt),e.unbindTexture()}}}let $t=[];function te(w){if(w.samples>0){if(_t(w)===!1){let y=w.textures,z=w.width,ct=w.height,tt=n.COLOR_BUFFER_BIT,mt=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(w),K=y.length>1;if(K)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let I=i.get(y[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,z,ct,0,0,z,ct,tt,n.NEAREST),c===!0&&($t.length=0,$t.push(n.COLOR_ATTACHMENT0+xt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&$t.push(mt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let I=i.get(y[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,I,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function se(w){return Math.min(r.maxSamples,w.samples)}function _t(w){let y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function me(w){let y=a.render.frame;h.get(w)!==y&&(h.set(w,y),w.update())}function Ft(w,y){let z=w.colorSpace,ct=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Ds&&z!==si&&(le.getTransfer(z)===de?(ct!==An||tt!==tn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",z)),y}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Bt,this.resetTextureUnits=Z,this.getTextureUnits=it,this.setTextureUnits=Ct,this.setTexture2D=dt,this.setTexture2DArray=Et,this.setTexture3D=et,this.setTextureCube=ot,this.rebindTextures=Xt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=_t,this.dispose=W}function iT(n,t){function e(i,r=si){let s,a=le.getTransfer(r);if(i===tn)return n.UNSIGNED_BYTE;if(i===yl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===du)return n.BYTE;if(i===pu)return n.SHORT;if(i===jr)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===_u)return n.ALPHA;if(i===xu)return n.RGB;if(i===An)return n.RGBA;if(i===ti)return n.DEPTH_COMPONENT;if(i===ri)return n.DEPTH_STENCIL;if(i===yu)return n.RED;if(i===bl)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===Sl)return n.RGBA_INTEGER;if(i===la||i===ca||i===ha||i===ua)if(a===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===la)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===la)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Tl||i===Al||i===El)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rl||i===Cl||i===Il||i===Pl||i===Nl||i===fa||i===Ll)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rl||i===Cl)return a===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Il)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pl)return s.COMPRESSED_R11_EAC;if(i===Nl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===fa)return s.COMPRESSED_RG11_EAC;if(i===Ll)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Ul||i===Fl||i===Ol||i===kl||i===Bl||i===zl||i===Vl||i===Gl||i===Hl||i===Wl||i===ql||i===Xl||i===Yl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ql)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yl)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$l||i===Zl||i===Jl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===$l)return a===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Ql||i===da||i===jl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$i?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new $s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Fn({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new un(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends Mn{constructor(t,e){super();let i=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,_=null,x=typeof XRWebGLBinding<"u",m=new Gu,p={},M=e.getContextAttributes(),E=null,v=null,T=[],A=[],g=new Gt,S=null,U=null,P=new Ze;P.viewport=new ve;let F=new Ze;F.viewport=new ve;let D=[P,F],k=new pl,C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=T[J];return dt===void 0&&(dt=new Gr,T[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=T[J];return dt===void 0&&(dt=new Gr,T[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=T[J];return dt===void 0&&(dt=new Gr,T[J]=dt),dt.getHandSpace()};function Y(J){let dt=A.indexOf(J.inputSource);if(dt===-1)return;let Et=T[dt];Et!==void 0&&(Et.update(J.inputSource,J.frame,l||a),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",nt);for(let J=0;J<T.length;J++){let dt=A[J];dt!==null&&(A[J]=null,T[J].disconnect(dt))}C=null,W=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(E),d=null,u=null,f=null,r=null,v=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),U!==null){let J=U.camera;J.fov=U.fov,J.zoom=U.zoom,J.updateProjectionMatrix(),U=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",H),r.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,et=null,ot=null;M.depth&&(ot=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=M.stencil?ri:ti,et=M.stencil?$i:Sn);let zt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(zt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new cn(u.textureWidth,u.textureHeight,{format:An,type:tn,depthTexture:new ni(u.textureWidth,u.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Et),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new cn(d.framebufferWidth,d.framebufferHeight,{format:An,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Bt.setContext(r),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(J){for(let dt=0;dt<J.removed.length;dt++){let Et=J.removed[dt],et=A.indexOf(Et);et>=0&&(A[et]=null,T[et].disconnect(Et))}for(let dt=0;dt<J.added.length;dt++){let Et=J.added[dt],et=A.indexOf(Et);if(et===-1){for(let zt=0;zt<T.length;zt++)if(zt>=A.length){A.push(Et),et=zt;break}else if(A[zt]===null){A[zt]=Et,et=zt;break}if(et===-1)break}let ot=T[et];ot&&ot.connect(Et)}}function q(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let dt=J.near,Et=J.far;m.texture!==null&&(m.depthNear>0&&(dt=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),k.near=F.near=P.near=dt,k.far=F.far=P.far=Et,(C!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),C=k.near,W=k.far),k.layers.mask=J.layers.mask|6,P.layers.mask=k.layers.mask&-5,F.layers.mask=k.layers.mask&-3;let et=J.parent,ot=k.cameras;q(k,et);for(let zt=0;zt<ot.length;zt++)q(ot[zt],et);k.projectionMatrix.copy(P.projectionMatrix),k.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&J.isPerspectiveCamera&&(U={camera:J,fov:J.fov,zoom:J.zoom}),Z(J,k,et)};function Z(J,dt,Et){Et===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Br*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(J){return p[J]};let it=null;function Ct(J,dt){if(h=dt.getViewerPose(l||a),_=dt,h!==null){let Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let et=!1;Et.length!==k.cameras.length&&(k.cameras.length=0,et=!0);for(let G=0;G<Et.length;G++){let st=Et[G],lt=null;if(d!==null)lt=d.getViewport(st);else{let ht=f.getViewSubImage(u,st);lt=ht.viewport,G===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let at=D[G];at===void 0&&(at=new Ze,at.layers.enable(G),at.viewport=new ve,D[G]=at),at.matrix.fromArray(st.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(st.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(lt.x,lt.y,lt.width,lt.height),G===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),et===!0&&k.cameras.push(at)}let ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let G=f.getDepthInformation(Et[0]);G&&G.isValid&&G.texture&&m.init(G,r.renderState)}if(ot&&ot.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let G=0;G<Et.length;G++){let st=Et[G].camera;if(st){let lt=p[st];lt||(lt=new $s,p[st]=lt);let at=f.getCameraImage(st);lt.sourceTexture=at}}}}for(let Et=0;Et<T.length;Et++){let et=A[Et],ot=T[Et];et!==null&&ot!==void 0&&ot.update(et,dt,l||a)}it&&it(J,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}let Bt=new sg;Bt.setAnimationLoop(Ct),this.setAnimationLoop=function(J){it=J},this.dispose=function(){}}},aT=new _e,mg=new Zt;mg.set(-1,0,0,0,1,0,0,0,1);function oT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Iu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(aT.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mg),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lT(n,t,e,i){let r={},s={};function a(M,E){let v=E.program;i.uniformBlockBinding(M,v,r[M.id])}function o(M,E){let v=r[M.id];v===void 0&&(_(M),v=c(M),r[M.id]=v,M.addEventListener("dispose",m));let T=E.program;i.updateUBOMapping(M,T);let A=t.render.frame;s[M.id]!==A&&(l(M),s[M.id]=A)}function c(M){let E=n.createBuffer(),v=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,v,T),n.bindBuffer(n.UNIFORM_BUFFER,null),E}function l(M){let E=r[M.id],v=M.uniforms,T=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,g=v.length;A<g;A++){let S=v[A];if(Array.isArray(S))for(let U=0,P=S.length;U<P;U++)h(S[U],A,U,T);else h(S,A,0,T)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,E,v,T){if(u(M,E,v,T)===!0){let A=M.__offset,g=M.value;if(Array.isArray(g)){let S=0;for(let U=0;U<g.length;U++){let P=g[U],F=x(P,!0);f(P,M.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,M.__data)}}function f(M,E,v){typeof M=="number"||typeof M=="boolean"?E[v]=M:M.isMatrix3?(E[v]=M.elements[0],E[v+1]=M.elements[1],E[v+2]=M.elements[2],E[v+3]=0,E[v+4]=M.elements[3],E[v+5]=M.elements[4],E[v+6]=M.elements[5],E[v+7]=0,E[v+8]=M.elements[6],E[v+9]=M.elements[7],E[v+10]=M.elements[8],E[v+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-v),v):M.toArray(E,v)}function u(M,E,v,T){let A=M.value,g=E+"_"+v;if(Array.isArray(A)){T[g]===void 0&&(T[g]=[]);let S=T[g],U=!1;for(let P=0;P<A.length;P++)d(A[P],S,P)===!0&&(U=!0);return U}return d(A,T,g)}function d(M,E,v){if(E[v]===void 0)return typeof M=="number"||typeof M=="boolean"?E[v]=M:ArrayBuffer.isView(M)?E[v]=M.slice():E[v]=M.clone(),!0;{let T=E[v];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return E[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(T.equals(M)===!1)return T.copy(M),!0}}return!1}function _(M){let E=M.uniforms,v=0,T=16;for(let g=0,S=E.length;g<S;g++){let U=Array.isArray(E[g])?E[g]:[E[g]];for(let P=0,F=U.length;P<F;P++){let D=U[P],k=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(E[g])||Array.isArray(D.value),W=v;for(let H=0,nt=k.length;H<nt;H++){let q=k[H],Z=x(q,C),it=v%T,Ct=it%Z.boundary,Bt=it+Ct;v+=Ct,Bt!==0&&T-Bt<Z.storage&&(v+=T-Bt),H===0&&(W=v),v+=Z.storage}let Y=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Y((v-W)/Float32Array.BYTES_PER_ELEMENT),D.__offset=W}}let A=v%T;return A>0&&(v+=T-A),M.__size=v,M.__cache={},this}function x(M,E){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(M){let E=M.target;E.removeEventListener("dispose",m),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:o,dispose:p}}var cT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function hT(){return Bn===null&&(Bn=new Jo(cT,16,16,Ei,Tn),Bn.name="DFG_LUT",Bn.minFilter=Je,Bn.magFilter=Je,Bn.wrapS=Ln,Bn.wrapT=Ln,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var sc=class{constructor(t={}){let{canvas:e=Cm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let x=d,m=new Set([Sl,Ml,bl]),p=new Set([tn,Sn,jr,$i,yl,vl]),M=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,A=null,g=[],S=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,D=null,k=null,C=null,W=null;this._outputColorSpace=Ve;let Y=0,H=0,nt=null,q=-1,Z=null,it=new ve,Ct=new ve,Bt=null,J=new jt(0),dt=0,Et=e.width,et=e.height,ot=1,zt=null,L=null,G=new ve(0,0,Et,et),st=new ve(0,0,Et,et),lt=!1,at=new yi,ht=new Ko,It=!1,Pt=!1,wt=new _e,Jt=new O,Wt=new ve,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Ut(){return nt===null?ot:1}let R=i;function $t(b,N){return e.getContext(b,N)}let te,se,_t,me,Ft,Ot,w,y,z,ct,tt,mt,bt,K,Q,xt,I,j,$,yt,ft,gt,Vt;try{let b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),R===null){let N="webgl2";if(R=$t(N,b),R===null)throw $t(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(b){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Yt("WebGLRenderer: "+b.message),b}function ee(){te=new bw(R),te.init(),ft=new iT(R,te),se=new hw(R,te,t,ft),_t=new eT(R,te),se.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),k=R.createFramebuffer(),C=R.createFramebuffer(),W=R.createFramebuffer(),me=new ww(R),Ft=new V1,Ot=new nT(R,te,_t,Ft,se,ft,me),w=new vw(P),y=new Ab(R),gt=new lw(R,y),z=new Mw(R,y,me,gt),ct=new Aw(R,z,y,gt,me),j=new Tw(R,se,Ot),Q=new uw(Ft),tt=new z1(P,w,te,se,gt,Q),mt=new oT(P,Ft),bt=new H1,K=new Z1(te),I=new ow(P,w,_t,ct,_,c),xt=new tT(P,ct,se),Vt=new lT(R,me,se,_t),$=new cw(R,te,me),yt=new Sw(R,te,me),me.programs=tt.programs,P.capabilities=se,P.extensions=te,P.properties=Ft,P.renderLists=bt,P.shadowMap=xt,P.state=_t,P.info=me}x!==tn&&(U=new Rw(x,e.width,e.height,o,r,s));let ut=new Hu(P,R);this.xr=ut,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(b){b!==void 0&&(ot=b,this.setSize(Et,et,!1))},this.getSize=function(b){return b.set(Et,et)},this.setSize=function(b,N,X=!0){if(ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=b,et=N,e.width=Math.floor(b*ot),e.height=Math.floor(N*ot),X===!0&&(e.style.width=b+"px",e.style.height=N+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Et*ot,et*ot).floor()},this.setDrawingBufferSize=function(b,N,X){Et=b,et=N,ot=X,e.width=Math.floor(b*X),e.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(x===tn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(it)},this.getViewport=function(b){return b.copy(G)},this.setViewport=function(b,N,X,B){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,N,X,B),_t.viewport(it.copy(G).multiplyScalar(Ut()).round())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,N,X,B){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,N,X,B),_t.scissor(Ct.copy(st).multiplyScalar(Ut()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){_t.setScissorTest(lt=b)},this.setOpaqueSort=function(b){zt=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,X=!0){let B=0;if(b){let V=!1;if(nt!==null){let Mt=nt.texture.format;V=m.has(Mt)}if(V){let Mt=nt.texture.type,Nt=p.has(Mt),vt=I.getClearColor(),Rt=I.getClearAlpha(),kt=vt.r,Kt=vt.g,ae=vt.b;Nt?(M[0]=kt,M[1]=Kt,M[2]=ae,M[3]=Rt,R.clearBufferuiv(R.COLOR,0,M)):(E[0]=kt,E[1]=Kt,E[2]=ae,E[3]=Rt,R.clearBufferiv(R.COLOR,0,E))}else B|=R.COLOR_BUFFER_BIT}N&&(B|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),I.dispose(),bt.dispose(),K.dispose(),Ot.dispose(),Ft.dispose(),w.dispose(),ct.dispose(),z.dispose(),gt.dispose(),Vt.dispose(),tt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",rf),ut.removeEventListener("sessionend",sf),Ci.stop()};function Ht(b){b.preventDefault(),Os("WebGLRenderer: Context Lost."),F=!0}function Qt(){Os("WebGLRenderer: Context Restored."),F=!1;let b=me.autoReset,N=xt.enabled,X=xt.autoUpdate,B=xt.needsUpdate,V=xt.type;ee(),me.autoReset=b,xt.enabled=N,xt.autoUpdate=X,xt.needsUpdate=B,xt.type=V}function Tt(b){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pe(b){let N=b.target;N.removeEventListener("dispose",pe),Ee(N)}function Ee(b){oi(b),Ft.remove(b)}function oi(b){let N=Ft.get(b).programs;N!==void 0&&(N.forEach(function(X){tt.releaseProgram(X)}),b.isShaderMaterial&&tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,B,V,Mt){N===null&&(N=St);let Nt=V.isMesh&&V.matrixWorld.determinantAffine()<0,vt=Xg(b,N,X,B,V);_t.setMaterial(B,Nt);let Rt=X.index,kt=1;if(B.wireframe===!0){if(Rt=z.getWireframeAttribute(X),Rt===void 0)return;kt=2}let Kt=X.drawRange,ae=X.attributes.position,Lt=Kt.start*kt,oe=(Kt.start+Kt.count)*kt;Mt!==null&&(Lt=Math.max(Lt,Mt.start*kt),oe=Math.min(oe,(Mt.start+Mt.count)*kt)),Rt!==null?(Lt=Math.max(Lt,0),oe=Math.min(oe,Rt.count)):ae!=null&&(Lt=Math.max(Lt,0),oe=Math.min(oe,ae.count));let Me=oe-Lt;if(Me<0||Me===1/0)return;gt.setup(V,B,vt,X,Rt);let xe,ge=$;if(Rt!==null&&(xe=y.get(Rt),ge=yt,ge.setIndex(xe)),V.isMesh)B.wireframe===!0?(_t.setLineWidth(B.wireframeLinewidth*Ut()),ge.setMode(R.LINES)):ge.setMode(R.TRIANGLES);else if(V.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),_t.setLineWidth(Oe*Ut()),V.isLineSegments?ge.setMode(R.LINES):V.isLineLoop?ge.setMode(R.LINE_LOOP):ge.setMode(R.LINE_STRIP)}else V.isPoints?ge.setMode(R.POINTS):V.isSprite&&ge.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Oe=V._multiDrawStarts,Dt=V._multiDrawCounts,We=V._multiDrawCount,ue=Rt?y.get(Rt).bytesPerElement:1,Ii=Ft.get(B).currentProgram.getUniforms();for(let ke=0;ke<We;ke++)Ii.setValue(R,"_gl_DrawID",ke),ge.render(Oe[ke]/ue,Dt[ke])}else if(V.isInstancedMesh)ge.renderInstances(Lt,Me,V.count);else if(X.isInstancedBufferGeometry){let Oe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,Oe);ge.renderInstances(Lt,Me,Dt)}else ge.render(Lt,Me)};function nf(b,N,X,B){D!==null&&b.isNodeMaterial&&D.setObject(B,b),It===!0&&Q.setState(b,X,!1),b.transparent===!0&&b.side===On&&b.forceSinglePass===!1?(b.side=Ue,b.needsUpdate=!0,as(b,N,B),b.side=Ai,b.needsUpdate=!0,as(b,N,B),b.side=On):as(b,N,B)}this.compile=function(b,N,X=null){X===null&&(X=b),D!==null&&D.renderStart(b,N,X),A=K.get(X),A.init(N),S.push(A),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),D!==null&&D.updateLights(A.state.lightsArray),Pt=this.localClippingEnabled,It=Q.init(this.clippingPlanes,Pt),It===!0&&Q.setGlobalState(this.clippingPlanes,N),D!==null&&xt.render(A.state.shadowsArray,X,N);let B=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Mt=V.material;if(Mt)if(Array.isArray(Mt))for(let Nt=0;Nt<Mt.length;Nt++){let vt=Mt[Nt];nf(vt,X,N,V),B.add(vt)}else nf(Mt,X,N,V),B.add(Mt)}),A=S.pop(),D!==null&&D.renderEnd(),B},this.compileAsync=function(b,N,X=null){let B=this.compile(b,N,X);return new Promise(V=>{function Mt(){if(B.forEach(function(Nt){let Rt=Ft.get(Nt).currentProgram;(Rt===void 0||Rt.isReady())&&B.delete(Nt)}),B.size===0){V(b);return}setTimeout(Mt,10)}te.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let yc=null;function Wg(b){yc&&yc(b)}function rf(){Ci.stop()}function sf(){Ci.start()}let Ci=new sg;Ci.setAnimationLoop(Wg),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){yc=b,ut.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},ut.addEventListener("sessionstart",rf),ut.addEventListener("sessionend",sf),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;D!==null&&D.renderStart(b,N);let X=ut.enabled===!0&&ut.isPresenting===!0,B=U!==null&&(nt===null||X)&&U.begin(P,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(N),N=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,N,nt),A=K.get(b,S.length),A.init(N),A.state.textureUnits=Ot.getTextureUnits(),S.push(A),wt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?ht.setFromArrayCamera(N):at.setFromProjectionMatrix(wt,pn,N.reversedDepth),Pt=this.localClippingEnabled,It=Q.init(this.clippingPlanes,Pt),T=bt.get(b,g.length),T.init(),g.push(T),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let Nt=P.xr.getDepthSensingMesh();Nt!==null&&vc(Nt,N,-1/0,P.sortObjects)}vc(b,N,0,P.sortObjects),T.finish(),D!==null&&D.updateLights(A.state.lightsArray),P.sortObjects===!0&&T.sort(zt,L),Xt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Xt&&I.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),It===!0&&Q.beginShadows();let V=A.state.shadowsArray;if(xt.render(V,b,N),It===!0&&Q.endShadows(),(B&&U.hasRenderPass())===!1){let Nt=T.opaque,vt=T.transmissive;if(A.setupLights(),N.isArrayCamera){let Rt=N.cameras;if(vt.length>0)for(let kt=0,Kt=Rt.length;kt<Kt;kt++){let ae=Rt[kt];of(Nt,vt,b,ae)}Xt&&I.render(b);for(let kt=0,Kt=Rt.length;kt<Kt;kt++){let ae=Rt[kt];af(T,b,ae,ae.viewport)}}else vt.length>0&&of(Nt,vt,b,N),Xt&&I.render(b),af(T,b,N)}nt!==null&&H===0&&(Ot.updateMultisampleRenderTarget(nt),Ot.updateRenderTargetMipmap(nt)),B&&U.end(P),b.isScene===!0&&b.onAfterRender(P,b,N),gt.resetDefaultState(),q=-1,Z=null,S.pop(),S.length>0?(A=S[S.length-1],Ot.setTextureUnits(A.state.textureUnits),It===!0&&Q.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,D!==null&&D.renderEnd()};function vc(b,N,X,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){let Nt=N.isArrayCamera?ht:at;if(!b.frustumCulled||b.intersectsFrustum(Nt)){B&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);let vt=ct.update(b),Rt=b.material;Rt.visible&&T.push(b,vt,Rt,X,Wt.z,null,N)}}else if(b.isMesh||b.isLine||b.isPoints){let Nt=N.isArrayCamera?ht:at;if(!b.frustumCulled||b.intersectsFrustum(Nt)){let vt=ct.update(b),Rt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Wt.copy(vt.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(Rt)){let kt=vt.groups;for(let Kt=0,ae=kt.length;Kt<ae;Kt++){let Lt=kt[Kt],oe=Rt[Lt.materialIndex];oe&&oe.visible&&T.push(b,vt,oe,X,Wt.z,Lt,N)}}else Rt.visible&&T.push(b,vt,Rt,X,Wt.z,null,N)}}}let Mt=b.children;for(let Nt=0,vt=Mt.length;Nt<vt;Nt++)vc(Mt[Nt],N,X,B)}function af(b,N,X,B){let{opaque:V,transmissive:Mt,transparent:Nt}=b;A.setupLightsView(X),It===!0&&Q.setGlobalState(P.clippingPlanes,X),B&&_t.viewport(it.copy(B)),V.length>0&&Aa(V,N,X),Mt.length>0&&Aa(Mt,N,X),Nt.length>0&&Aa(Nt,N,X),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function of(b,N,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){let Lt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new cn(1,1,{generateMipmaps:!0,type:Lt?Tn:tn,minFilter:ii,samples:Math.max(4,se.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Mt=A.state.transmissionRenderTarget[B.id],Nt=B.viewport||it;Mt.setSize(Nt.z*P.transmissionResolutionScale,Nt.w*P.transmissionResolutionScale);let vt=P.getRenderTarget(),Rt=P.getActiveCubeFace(),kt=P.getActiveMipmapLevel();P.setRenderTarget(Mt),P.getClearColor(J),dt=P.getClearAlpha(),dt<1&&P.setClearColor(16777215,.5),P.clear(),Xt&&I.render(X);let Kt=P.toneMapping;P.toneMapping=kn;let ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),It===!0&&Q.setGlobalState(P.clippingPlanes,B),Aa(b,X,B),Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let oe=0,Me=N.length;oe<Me;oe++){let xe=N[oe],{object:ge,geometry:Oe,material:Dt,group:We}=xe;if(Dt.side===On&&ge.layers.test(B.layers)){let ue=Dt.side;Dt.side=Ue,Dt.needsUpdate=!0,lf(ge,X,B,Oe,Dt,We),Dt.side=ue,Dt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Ot.updateMultisampleRenderTarget(Mt),Ot.updateRenderTargetMipmap(Mt))}P.setRenderTarget(vt,Rt,kt),P.setClearColor(J,dt),ae!==void 0&&(B.viewport=ae),P.toneMapping=Kt}function Aa(b,N,X){let B=N.isScene===!0?N.overrideMaterial:null;for(let V=0,Mt=b.length;V<Mt;V++){let Nt=b[V],{object:vt,geometry:Rt,group:kt}=Nt,Kt=Nt.material;Kt.allowOverride===!0&&B!==null&&(Kt=B),vt.layers.test(X.layers)&&lf(vt,N,X,Rt,Kt,kt)}}function lf(b,N,X,B,V,Mt){D!==null&&V.isNodeMaterial&&D.setObject(b,V),b.onBeforeRender(P,N,X,B,V,Mt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(P,N,X,B,b,Mt),V.transparent===!0&&V.side===On&&V.forceSinglePass===!1?(V.side=Ue,V.needsUpdate=!0,P.renderBufferDirect(X,N,B,V,b,Mt),V.side=Ai,V.needsUpdate=!0,P.renderBufferDirect(X,N,B,V,b,Mt),V.side=On):P.renderBufferDirect(X,N,B,V,b,Mt),b.onAfterRender(P,N,X,B,V,Mt)}function cf(b){let N=0;for(let X of b)X.texture!==null&&N++;return N}function as(b,N,X){N.isScene!==!0&&(N=St);let B=Ft.get(b),V=A.state.lights,Mt=A.state.shadowsArray,Nt=V.state.version,vt=tt.getParameters(b,V.state,Mt,N,X,A.state.lightProbeGridArray),Rt=tt.getProgramCacheKey(vt),kt=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Kt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=w.get(b.envMap||B.environment,Kt),B.envMapRotation=B.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,kt===void 0&&(b.addEventListener("dispose",pe),kt=new Map,B.programs=kt,B.programVariants=new Map);let ae=kt.get(Rt);if(ae!==void 0){if(B.currentProgram===ae&&B.lightsStateVersion===Nt)return uf(b,vt),ae}else vt.uniforms=tt.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,X,vt),b.onBeforeCompile(vt,P),ae=tt.acquireProgram(vt,Rt),kt.set(Rt,ae),B.uniforms=vt.uniforms;let Lt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Lt.clippingPlanes=Q.uniform),uf(b,vt),B.needsLights=$g(b),B.lightsStateVersion=Nt,B.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.sunLights.value=V.state.sun,Lt.sunLightShadows.value=V.state.sunShadow,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.sunShadowMatrix.value=V.state.sunShadowMatrix,Lt.sunShadowCascade.value=V.state.sunShadowCascade,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),B.numLightProbeGrids=cf(A.state.lightProbeGridArray),B.currentProgram=ae,B.uniformsList=null,ae}function qg(b,N,X,B,V){let Mt=Ft.get(b),Nt=Mt.currentProgram.id+","+B+","+V,vt=Mt.programVariants.get(Nt);return vt===void 0?(vt=as(b,N,X),Mt.programVariants.set(Nt,vt)):(Mt.currentProgram=vt,Mt.uniformsList=null,Mt.outputColorSpace=B,Mt.toneMapping=V),vt}function hf(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=ts.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function uf(b,N){let X=Ft.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Xg(b,N,X,B,V){N.isScene!==!0&&(N=St),Ot.resetTextureUnits();let Mt=N.fog,Nt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,vt=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:le.workingColorSpace,Rt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,kt=w.get(B.envMap||Nt,Rt),Kt=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ae=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Lt=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color,xe=kn;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(xe=P.toneMapping);let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Oe=ge!==void 0?ge.length:0,Dt=Ft.get(B),We=A.state.lights;if(It===!0&&(Pt===!0||b!==Z)){let be=b===Z&&B.id===q;Q.setState(B,b,be)}let ue=!1,Ii=!1;B.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==We.state.version||V.isBatchedMesh&&Dt.batching===!1||!V.isBatchedMesh&&Dt.batching===!0||V.isBatchedMesh&&Dt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Dt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Dt.instancing===!1||!V.isInstancedMesh&&Dt.instancing===!0||V.isSkinnedMesh&&Dt.skinning===!1||!V.isSkinnedMesh&&Dt.skinning===!0||V.isInstancedMesh&&Dt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Dt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Dt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Dt.instancingMorph===!1&&V.morphTexture!==null||Dt.envMap!==kt||B.fog===!0&&Dt.fog!==Mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==Q.numPlanes||Dt.numIntersection!==Q.numIntersection)||Dt.vertexAlphas!==Kt||Dt.vertexTangents!==ae||Dt.morphTargets!==Lt||Dt.morphNormals!==oe||Dt.morphColors!==Me||Dt.morphTargetsCount!==Oe||Dt.numLightProbeGrids!==cf(A.state.lightProbeGridArray)?ue=!0:(Dt.outputColorSpace!==vt||Dt.toneMapping!==xe)&&(Ii=!0):(ue=!0,Dt.__version=B.version);let ke=Dt.currentProgram;(ue===!0||Ii===!0)&&(ke=Ii===!0?qg(B,N,V,vt,xe):as(B,N,V),D&&B.isNodeMaterial&&D.onUpdateProgram(B,ke,Dt));let Ea=!1,li=!1,Pi=!1,he=ke.getUniforms(),Le=Dt.uniforms;if(_t.useProgram(ke.program)&&(Ea=!0,li=!0,Pi=!0),B.id!==q&&(q=B.id,li=!0),Ea||Z!==b){_t.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),he.setValue(R,"projectionMatrix",b.projectionMatrix),he.setValue(R,"viewMatrix",b.matrixWorldInverse);let Re=he.map.cameraPosition;Re!==void 0&&Re.setValue(R,Jt.setFromMatrixPosition(b.matrixWorld)),se.logarithmicDepthBuffer&&he.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&he.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,li=!0,Pi=!0)}if(Dt.needsLights&&(We.state.sunShadowMap.length>0&&he.setValue(R,"sunShadowMap",We.state.sunShadowMap,Ot),We.state.directionalShadowMap.length>0&&he.setValue(R,"directionalShadowMap",We.state.directionalShadowMap,Ot),We.state.spotShadowMap.length>0&&he.setValue(R,"spotShadowMap",We.state.spotShadowMap,Ot),We.state.pointShadowMap.length>0&&he.setValue(R,"pointShadowMap",We.state.pointShadowMap,Ot)),V.isSkinnedMesh){he.setOptional(R,V,"bindMatrix"),he.setOptional(R,V,"bindMatrixInverse");let be=V.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),he.setValue(R,"boneTexture",be.boneTexture,Ot))}V.isBatchedMesh&&(he.setOptional(R,V,"batchingTexture"),he.setValue(R,"batchingTexture",V._matricesTexture,Ot),he.setOptional(R,V,"batchingIdTexture"),he.setValue(R,"batchingIdTexture",V._indirectTexture,Ot),he.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&he.setValue(R,"batchingColorTexture",V._colorsTexture,Ot));let mn=X.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&j.update(V,X,ke),(li||Dt.receiveShadow!==V.receiveShadow)&&(Dt.receiveShadow=V.receiveShadow,he.setValue(R,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Le.envMapIntensity.value=N.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=hT()),li){if(he.setValue(R,"toneMappingExposure",P.toneMappingExposure),Dt.needsLights&&Yg(Le,Pi),Mt&&B.fog===!0&&mt.refreshFogUniforms(Le,Mt),mt.refreshMaterialUniforms(Le,B,ot,et,A.state.transmissionRenderTarget[b.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let be=v,Re=0;for(let Vn of A.state.lightProbeGridArray)Vn.texture!==null&&(be.textures[Re]=Vn.texture,be.min[Re]=Vn.boundingBox.min,be.max[Re]=Vn.boundingBox.max,be.resolution[Re]=Vn.resolution,Re++);for(let Vn in be)be[Vn].length=Re;Le.probesSH.value=be.textures,Le.probesMin.value=be.min,Le.probesMax.value=be.max,Le.probesResolution.value=be.resolution}ts.upload(R,hf(Dt),Le,Ot)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ts.upload(R,hf(Dt),Le,Ot),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&he.setValue(R,"center",V.center),he.setValue(R,"modelViewMatrix",V.modelViewMatrix),he.setValue(R,"normalMatrix",V.normalMatrix),he.setValue(R,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){let be=B.uniformsGroups;for(let Re=0,Vn=be.length;Re<Vn;Re++){let df=be[Re];Vt.update(df,ke),Vt.bind(df,ke)}}return ke}function Yg(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function $g(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,N,X){let B=Ft.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ft.get(b.texture).__webglTexture=N,Ft.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let X=Ft.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){nt=b,Y=N,H=X;let B=null,V=!1,Mt=!1;if(b){let vt=Ft.get(b);if(vt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(R.FRAMEBUFFER,vt.__webglFramebuffer),it.copy(b.viewport),Ct.copy(b.scissor),Bt=b.scissorTest,_t.viewport(it),_t.scissor(Ct),_t.setScissorTest(Bt),q=-1;return}else if(vt.__webglFramebuffer===void 0)Ot.setupRenderTarget(b);else if(vt.__hasExternalTextures)Ot.rebindTextures(b,Ft.get(b.texture).__webglTexture,Ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Kt=b.depthTexture;if(vt.__boundDepthTexture!==Kt){if(Kt!==null&&Ft.has(Kt)&&(b.width!==Kt.image.width||b.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(b)}}let Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let kt=Ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[N])?B=kt[N][X]:B=kt[N],V=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?B=Ft.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?B=kt[X]:B=kt,it.copy(b.viewport),Ct.copy(b.scissor),Bt=b.scissorTest}else it.copy(G).multiplyScalar(ot).floor(),Ct.copy(st).multiplyScalar(ot).floor(),Bt=lt;if(X!==0&&(B=k),_t.bindFramebuffer(R.FRAMEBUFFER,B)&&_t.drawBuffers(b,B),_t.viewport(it),_t.scissor(Ct),_t.setScissorTest(Bt),V){let vt=Ft.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,vt.__webglTexture,X)}else if(Mt){let vt=N;for(let Rt=0;Rt<b.textures.length;Rt++){let kt=Ft.get(b.textures[Rt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Rt,kt.__webglTexture,X,vt)}}else if(b!==null&&X!==0){let vt=Ft.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,vt.__webglTexture,X)}q=-1};function ff(b){let N=Ft.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=se.textureFormatReadable(b.format),N.__typeReadable=se.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,X,B,V,Mt,Nt,vt=0){if(!(b&&b.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Rt=Rt[Nt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){_t.bindFramebuffer(R.FRAMEBUFFER,Rt);try{let kt=b.textures[vt],Kt=kt.format,ae=kt.type;b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+vt);let Lt=ff(kt);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&X>=0&&X<=b.height-V&&R.readPixels(N,X,B,V,ft.convert(Kt),ft.convert(ae),Mt)}finally{let kt=nt!==null?Ft.get(nt).__webglFramebuffer:null;_t.bindFramebuffer(R.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,B,V,Mt,Nt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Rt=Rt[Nt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(N>=0&&N<=b.width-B&&X>=0&&X<=b.height-V){_t.bindFramebuffer(R.FRAMEBUFFER,Rt);let kt=b.textures[vt],Kt=kt.format,ae=kt.type;b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+vt);let Lt=ff(kt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,oe),R.bufferData(R.PIXEL_PACK_BUFFER,Mt.byteLength,R.STREAM_READ),R.readPixels(N,X,B,V,ft.convert(Kt),ft.convert(ae),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let Me=nt!==null?Ft.get(nt).__webglFramebuffer:null;_t.bindFramebuffer(R.FRAMEBUFFER,Me);let xe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Pm(R,xe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,oe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Mt),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(oe),R.deleteSync(xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,X=0){let B=Math.pow(2,-X),V=Math.floor(b.image.width*B),Mt=Math.floor(b.image.height*B),Nt=N!==null?N.x:0,vt=N!==null?N.y:0;Ot.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,Nt,vt,V,Mt),_t.unbindTexture()},this.copyTextureToTexture=function(b,N,X=null,B=null,V=0,Mt=0){let Nt,vt,Rt,kt,Kt,ae,Lt,oe,Me,xe=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(X!==null)Nt=X.max.x-X.min.x,vt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,kt=X.min.x,Kt=X.min.y,ae=X.isBox3?X.min.z:0;else{let he=Math.pow(2,-V);Nt=Math.floor(xe.width*he),vt=Math.floor(xe.height*he),b.isDataArrayTexture?Rt=xe.depth:b.isData3DTexture?Rt=Math.floor(xe.depth*he):Rt=1,kt=0,Kt=0,ae=0}B!==null?(Lt=B.x,oe=B.y,Me=B.z):(Lt=0,oe=0,Me=0);let ge=ft.convert(N.format),Oe=ft.convert(N.type),Dt;N.isData3DTexture?(Ot.setTexture3D(N,0),Dt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ot.setTexture2DArray(N,0),Dt=R.TEXTURE_2D_ARRAY):(Ot.setTexture2D(N,0),Dt=R.TEXTURE_2D),_t.activeTexture(R.TEXTURE0),_t.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),_t.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_t.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let We=_t.getParameter(R.UNPACK_ROW_LENGTH),ue=_t.getParameter(R.UNPACK_IMAGE_HEIGHT),Ii=_t.getParameter(R.UNPACK_SKIP_PIXELS),ke=_t.getParameter(R.UNPACK_SKIP_ROWS),Ea=_t.getParameter(R.UNPACK_SKIP_IMAGES);_t.pixelStorei(R.UNPACK_ROW_LENGTH,xe.width),_t.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xe.height),_t.pixelStorei(R.UNPACK_SKIP_PIXELS,kt),_t.pixelStorei(R.UNPACK_SKIP_ROWS,Kt),_t.pixelStorei(R.UNPACK_SKIP_IMAGES,ae);let li=b.isDataArrayTexture||b.isData3DTexture,Pi=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let he=Ft.get(b),Le=Ft.get(N),mn=Ft.get(he.__renderTarget),be=Ft.get(Le.__renderTarget);_t.bindFramebuffer(R.READ_FRAMEBUFFER,mn.__webglFramebuffer),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Re=0;Re<Rt;Re++)li&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.get(b).__webglTexture,V,ae+Re),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.get(N).__webglTexture,Mt,Me+Re)),R.blitFramebuffer(kt,Kt,kt+Nt,Kt+vt,Lt,oe,Lt+Nt,oe+vt,R.DEPTH_BUFFER_BIT,R.NEAREST);_t.bindFramebuffer(R.READ_FRAMEBUFFER,null),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||Ft.has(b)){let he=Ft.get(b),Le=Ft.get(N);_t.bindFramebuffer(R.READ_FRAMEBUFFER,C),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,W);for(let mn=0;mn<Rt;mn++)li?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,he.__webglTexture,V,ae+mn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,he.__webglTexture,V),Pi?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Le.__webglTexture,Mt,Me+mn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Le.__webglTexture,Mt),V!==0?R.blitFramebuffer(kt,Kt,kt+Nt,Kt+vt,Lt,oe,Lt+Nt,oe+vt,R.COLOR_BUFFER_BIT,R.NEAREST):Pi?R.copyTexSubImage3D(Dt,Mt,Lt,oe,Me+mn,kt,Kt,Nt,vt):R.copyTexSubImage2D(Dt,Mt,Lt,oe,kt,Kt,Nt,vt);_t.bindFramebuffer(R.READ_FRAMEBUFFER,null),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pi?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Dt,Mt,Lt,oe,Me,Nt,vt,Rt,ge,Oe,xe.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Dt,Mt,Lt,oe,Me,Nt,vt,Rt,ge,xe.data):R.texSubImage3D(Dt,Mt,Lt,oe,Me,Nt,vt,Rt,ge,Oe,xe):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Mt,Lt,oe,Nt,vt,ge,Oe,xe.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Mt,Lt,oe,xe.width,xe.height,ge,xe.data):R.texSubImage2D(R.TEXTURE_2D,Mt,Lt,oe,Nt,vt,ge,Oe,xe);_t.pixelStorei(R.UNPACK_ROW_LENGTH,We),_t.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ue),_t.pixelStorei(R.UNPACK_SKIP_PIXELS,Ii),_t.pixelStorei(R.UNPACK_SKIP_ROWS,ke),_t.pixelStorei(R.UNPACK_SKIP_IMAGES,Ea),Mt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&R.generateMipmap(Dt),_t.unbindTexture()},this.initRenderTarget=function(b){Ft.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),_t.unbindTexture()},this.resetState=function(){Y=0,H=0,nt=null,_t.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var gg={type:"change"},qu={type:"start"},xg={type:"end"},lc=new xi,_g=new on,uT=Math.cos(70*Cu.DEG2RAD),Ae=new O,en=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Wu=1e-6,cc=class extends sa{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new ln,this._lastTargetPosition=new O,this._quat=new ln().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zr,this._sphericalDelta=new Zr,this._scale=1,this._panOffset=new O,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new O,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dT.bind(this),this._onPointerDown=fT.bind(this),this._onPointerUp=pT.bind(this),this._onContextMenu=bT.bind(this),this._onMouseWheel=_T.bind(this),this._onKeyDown=xT.bind(this),this._onTouchStart=yT.bind(this),this._onTouchMove=vT.bind(this),this._onMouseDown=mT.bind(this),this._onMouseMove=gT.bind(this),this._interceptControlDown=MT.bind(this),this._interceptControlUp=ST.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gg),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ae.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<uT?this.object.lookAt(this.target):(_g.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(_g,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Wu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wu||this._lastTargetPosition.distanceToSquared(this.target)>Wu?(this.dispatchEvent(gg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ae.copy(r).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function fT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function dT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function pT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xg),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case wi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case wi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(qu)}function gT(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _T(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(qu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xg))}function xT(n){this.enabled!==!1&&this._handleKeyDown(n)}function yT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1){this.state=fe.NONE;break}this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1){this.state=fe.NONE;break}this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(qu)}function vT(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function bT(n){this.enabled!==!1&&n.preventDefault()}function MT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ST(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uc=8.5,Ji=5,yg=5.4,En=0,Xu=yg/2,Rn=-uc/2,wT=new Intl.NumberFormat("en",{maximumFractionDigits:2}),TT=()=>globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches,AT=new O(0,1,0);function Ki(n,t){return Number.isFinite(n)?n:t}function hc(n={},t=1){let e=Ki(n.min,0),i=Ki(n.max,t);return i>e?[e,i]:[e-.5,e+.5]}function Yu(n,[t,e]){let i=Array.isArray(n?.ticks)&&n.ticks.length?n.ticks:Array.from({length:5},(s,a)=>t+(e-t)*a/4),r=Math.max(1,Math.ceil(i.length/7));return i.filter((s,a)=>a%r===0||a===i.length-1).map(s=>{let a=typeof s=="number"?s:s?.value;return{value:a,label:typeof s?.label=="string"?s.label:wT.format(a)}}).filter(s=>Number.isFinite(s.value)&&s.value>=t&&s.value<=e)}function ET(n,t){return Math.hypot(t.clientX-n.x,t.clientY-n.y)}function vg(n,t={}){let{onSelect:e=()=>{},onHover:i=()=>{},onUnavailable:r=()=>{}}=t,s;try{s=new sc({canvas:n,antialias:!0}),s.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,1.5)),s.outputColorSpace=Ve}catch{return r(),null}let a=new Bs;a.background=new jt("#141020"),a.add(new ia("#f1ddff",.9)),a.add(new ta("#fff4ff","#73518a",2.1));let o=new Yr("#fffcf5",2);o.position.set(-5,9,8),a.add(o);let c=new Yr("#c9f6a8",1);c.position.set(7,6,-9),a.add(c);let l=new Qn;a.add(l);let h=new Ze(37,1,.1,100),f=new cc(h,n);f.cursorStyle="grab",f.enablePan=!1,f.enableDamping=!TT(),f.dampingFactor=.17,f.minDistance=5,f.maxDistance=46,f.maxPolarAngle=Math.PI*.59,f.autoRotateSpeed=.47;let u=!1,d=0,_=0,x,m,p=!1,M=!1,E=!0,v=[],T=new Set,A=new Set,g=new ra,S=new Gt,U=new Gt,P=new Js(1,16,12),F=new vi(1,1,1),D=new Wr({color:"#faf0ff",side:Ue}),k=[];function C(){E=!0,!d&&!u&&(d=requestAnimationFrame(Y))}function W(){let L=n.clientWidth,G=n.clientHeight;return!L||!G?!1:(s.getSize(U),(L!==U.x||G!==U.y)&&(s.setSize(L,G,!1),h.aspect=L/G,h.updateProjectionMatrix(),E=!0),!0)}function Y(L){if(d=0,u||!W())return;let G=Math.min(.05,_?(L-_)/1e3:.016);_=L;let st=f.update(G);(E||st)&&(E=!1,s.render(a,h)),!d&&(f.autoRotate||st)&&(d=requestAnimationFrame(Y))}function H(){if(u)return;W();let L=h.aspect||1,G=Math.max(1,1.29/L);f.target.set(0,Ji*.43,0),h.position.set(M?8.3:4.3,7.5,13.5*G),f.update(),C()}function nt(L){return A.add(L),L}function q(){l.clear(),k.length=0;for(let L of A)L.dispose();A.clear()}function Z(L,G,st=!1){if(L.length<2)return;let lt=nt(new hn().setFromPoints(L)),at=st?new Ws(lt,G):new qr(lt,G);G.isLineDashedMaterial&&at.computeLineDistances(),l.add(at)}function it(L,G,st=!1){if(!L)return;let lt=document.createElement("canvas"),at=lt.getContext("2d");if(!at)return;let ht=st?"650 29px system-ui, sans-serif":"600 26px system-ui, sans-serif";at.font=ht;let It=460,Pt=L.length>38?L.slice(0,35)+"\u2026":L;lt.width=Math.max(12,Math.min(It,Math.ceil(at.measureText(Pt).width)+15)),lt.height=48,at.font=ht,at.textAlign="center",at.textBaseline="middle",at.lineWidth=5,at.strokeStyle="#141020",at.fillStyle=st?"#f2e8ff":"#c9b8dc",at.strokeText(Pt,lt.width/2,24,lt.width-10),at.fillText(Pt,lt.width/2,24,lt.width-10);let wt=nt(new Xs(lt));wt.colorSpace=Ve;let Jt=nt(new Hr({map:wt,depthTest:!1,depthWrite:!1})),Wt=new Hs(Jt),St=st?.47:.42;Wt.position.copy(G),Wt.scale.set(St*lt.width/lt.height,St,1),Wt.renderOrder=5,l.add(Wt)}function Ct(L,G,st){let[lt,at,ht]=G,[It,Pt,wt]=L,Jt=Yu(It,lt),Wt=Yu(Pt,at),St=M?Yu(wt,ht):[],Xt=-Rn,Ut=M?Xu:0,R=M?-Xu:0,$t=[],te=(Ot,w,y)=>new O(Ot,w,y),se=(Ot,w,y)=>Ot.push(te(...w),te(...y)),_t=nt(new Un({color:"#49395e"})),me=nt(new Un({color:"#baa4d0"})),Ft=[];se(Ft,[Rn,En,Ut],[Xt,En,Ut]),se(Ft,[Rn,En,Ut],[Rn,Ji,Ut]),M&&se(Ft,[Xt,En,Ut],[Xt,En,R]);for(let Ot of Jt){let w=st(Ot.value,at[0],ht[0]).x;se($t,[w,En,R],[w,En,Ut+.13]),se($t,[w,En,R],[w,Ji,R]),it(Ot.label,te(w,-.26,Ut+.24))}for(let Ot of Wt){let w=st(lt[0],Ot.value,ht[0]).y;se($t,[Rn,w,R],[Xt,w,R]),M&&se($t,[Rn,w,R],[Rn,w,Ut]),it(Ot.label,te(Rn-.48,w,Ut+.12))}for(let Ot of St){let w=st(lt[0],at[0],Ot.value).z;se($t,[Rn,En,w],[Xt+.14,En,w]),it(Ot.label,te(Xt+.43,-.18,w))}Z($t,_t,!0),Z(Ft,me,!0),it(It?.label,te(0,-.74,Ut+.28),!0),it(Pt?.label,te(Rn+.39,Ji+.46,Ut+.04),!0),M?it(wt?.label,te(Xt-.69,Ji+.42,R),!0):it("Flat data plane",te(Xt-.94,Ji+.46,.04))}function Bt(L,G,st){let[lt,at]=G,ht=L.kind==="bars"||L.kind==="histogram",It=Math.max(at[0],Math.min(0,at[1])),Pt=st(lt[0],It,G[2][0]).y,wt=new Set(v.map(St=>St.x)).size,Jt=new Map,Wt=(St,Xt)=>{let Ut=St||"#2779cb",R=Ut+Xt;return Jt.has(R)||Jt.set(R,nt(new Ks({color:Ut,roughness:.47,metalness:.01,emissive:Xt?Ut:"#000000",emissiveIntensity:Xt?.23:0}))),Jt.get(R)};for(let St of v){let Xt=st(St.x,St.y,St.z),Ut=String(St.id)===String(L.selectedId)&&L.selectedId!=null,R=new un(ht?F:P,Wt(St.color,Ut));if(ht){let $t=Ki(St.width,0)>0?uc*St.width/(lt[1]-lt[0]):uc*.66/Math.max(wt,1),te=Math.abs(Xt.y-Pt);R.scale.set($t,Math.max(te,.008),.75),Xt.y=(Xt.y+Pt)/2}else{let $t=L.kind==="line"?.068:.113;R.scale.setScalar(Ut?$t*1.31:$t)}if(R.position.copy(Xt),R.userData.point=St,l.add(R),k.push(R),Ut){let $t=new un(R.geometry,D);$t.position.copy(R.position),ht?$t.scale.set(R.scale.x*1.045,R.scale.y,R.scale.z*1.045):$t.scale.copy(R.scale).multiplyScalar(1.17),l.add($t)}}if(L.kind==="line"){let St=nt(new Un({color:v[0]?.color||"#2779cb"}));Z(v.map(Xt=>st(Xt.x,Xt.y,Xt.z)),St)}for(let St of L.guides||[]){if(St.only2D)continue;let Xt={color:St.color||"#284c75",transparent:St.opacity!=null,opacity:Ki(St.opacity,1)},Ut=nt(St.dash?new Qs({...Xt,dashSize:.14,gapSize:.1}):new Un(Xt));Z(St.points.filter(R=>Number.isFinite(R[0])&&Number.isFinite(R[1])).map(([R,$t,te])=>st(R,$t,te)),Ut)}}function J(L){if(u)return;let G=L.axes||[];v=(L.points||[]).filter(wt=>Number.isFinite(wt.x)&&Number.isFinite(wt.y));let st=hc(G[0]),lt=hc(G[1]),at=v.map(wt=>Ki(wt.z,0)),ht=G[2]?hc(G[2]):hc({min:at.length?Math.min(...at):0,max:at.length?Math.max(...at):1}),It=M;M=new Set(at).size>1||(L.guides||[]).some(wt=>!wt.only2D&&new Set(wt.points.map(Jt=>Ki(Jt[2],0))).size>1);let Pt=(wt,Jt,Wt)=>new O(Rn+uc*(wt-st[0])/(st[1]-st[0]),En+Ji*(Jt-lt[0])/(lt[1]-lt[0]),M?Xu-yg*(Ki(Wt,ht[0])-ht[0])/(ht[1]-ht[0]):0);q(),Ct(G,[st,lt,ht],Pt),Bt(L,[st,lt,ht],Pt),It!==M&&H(),C()}function dt(L){let G=n.getBoundingClientRect();return!G.width||!G.height||!k.length?null:(S.set((L.clientX-G.left)/G.width*2-1,1-(L.clientY-G.top)/G.height*2),g.setFromCamera(S,h),g.intersectObjects(k,!1)[0]?.object.userData.point||null)}function Et(L){L!==x&&(x=L,i(L))}let et=[["pointerdown",L=>{T.add(L.pointerId),p=T.size>1||p,T.size===1&&(m={id:L.pointerId,x:L.clientX,y:L.clientY,button:L.button})}],["pointermove",L=>{L.pointerType!=="touch"&&!L.buttons&&Et(dt(L))}],["pointerleave",()=>Et(null)],["pointerup",L=>{if(!p&&m?.id===L.pointerId&&m.button===0&&ET(m,L)<5){let G=dt(L);G&&e(G)}T.delete(L.pointerId),T.size||(m=null,p=!1)}],["pointercancel",()=>{T.clear(),m=null,p=!1}],["webglcontextlost",L=>{L.preventDefault(),zt(),r()}]];for(let[L,G]of et)n.addEventListener(L,G);f.addEventListener("change",C);let ot=new ResizeObserver(C);ot.observe(n),H();function zt(){if(!u){u=!0,cancelAnimationFrame(d),ot.disconnect();for(let[L,G]of et)n.removeEventListener(L,G);f.removeEventListener("change",C),f.dispose(),q(),P.dispose(),F.dispose(),D.dispose(),s.dispose()}}return{draw:J,reset:H,destroy:zt,rotate(L){u||(h.position.sub(f.target).applyAxisAngle(AT,L).add(f.target),f.update(),C())},zoom(L){if(u||!Number.isFinite(L)||L<=0)return;let G=h.position.clone().sub(f.target);G.setLength(Math.min(f.maxDistance,Math.max(f.minDistance,G.length()*L))),h.position.copy(f.target).add(G),f.update(),C()},setOrbit(L){f.autoRotate=!!L,C()}}}var RT=new Intl.NumberFormat("en",{maximumFractionDigits:2}),Qi=(n,t,e)=>Math.min(e,Math.max(t,n)),ji=(n,t)=>Number.isFinite(n)?n:t;function $u(n={},t=0,e=1){let i=ji(n.min,t),r=ji(n.max,e);return r>i?[i,r]:[i-.5,i+.5]}function Zu(n,[t,e],i){let r=n?.ticks?.length?n.ticks:Array.from({length:i},(a,o)=>t+(e-t)*o/(i-1)),s=Math.max(1,Math.ceil(r.length/i));return r.filter((a,o)=>o%s===0).flatMap(a=>{let o=typeof a=="number"?a:a?.value;return Number.isFinite(o)&&o>=t&&o<=e?[{value:o,label:a?.label??RT.format(o)}]:[]})}function CT(n,t,e){let i=!1;for(let r=0,s=n.length-1;r<n.length;s=r++){let a=n[r],o=n[s];a.y>e!=o.y>e&&t<(o.x-a.x)*(e-a.y)/(o.y-a.y)+a.x&&(i=!i)}return i}function IT(n){return n.reduce((t,e,i)=>{let r=n[(i+1)%n.length];return t+e.x*r.y-r.x*e.y},0)}var PT=[{corners:[0,3,2,1],shade:"rgba(1, 3, 16, .4)"},{corners:[4,5,6,7],shade:"rgba(7, 8, 30, .1)"},{corners:[0,4,7,3],shade:"rgba(1, 3, 18, .44)"},{corners:[1,2,6,5],shade:"rgba(2, 3, 18, .3)"},{corners:[0,1,5,4],shade:"rgba(3, 4, 15, .5)"},{corners:[3,7,6,2],shade:"rgba(255, 255, 255, .27)"}];function bg(n,{onSelect:t=()=>{},onHover:e=()=>{},onUnavailable:i=()=>{}}={}){let r;try{r=n.getContext("2d",{alpha:!1})}catch{}if(!r)return i(),null;let s=globalThis.matchMedia?.("(prefers-reduced-motion: reduce)"),a=0,o=0,c=1,l,h,f,u,d=0,_=0,x=!1,m=!1,p=[],M,E,v,T=new Map,A=n.style.touchAction;n.style.touchAction="none",n.dataset.renderer="software-3d";function g(){!d&&!m&&(d=requestAnimationFrame(nt))}function S(){if(a=n.clientWidth,o=n.clientHeight,!a||!o)return!1;c=Math.min(devicePixelRatio||1,1.75);let L=Math.round(a*c),G=Math.round(o*c);return(n.width!==L||n.height!==G)&&(n.width=L,n.height=G),r.setTransform(c,0,0,c,0,0),!0}function U(){l=u?.deep?.48:.34,h=u?.deep?.36:.24,f=15.6,g()}function P(){let L=Math.sin(l),G=Math.cos(l),st=Math.sin(h),lt=Math.cos(h),at=Math.min(a*1.4,o*1.56);return([ht,It,Pt])=>{let wt=L*ht+G*Pt,Jt=It-2.28,Wt=st*Jt+lt*wt,St=at/Math.max(.2,f-Wt);return{x:a*.5+(G*ht-L*Pt)*St,y:o*.51-(lt*Jt-st*wt)*St,depth:Wt,scale:St}}}function F(L,G,st=1,lt=[]){if(!(L.length<2)){r.beginPath(),r.moveTo(L[0].x,L[0].y);for(let at of L.slice(1))r.lineTo(at.x,at.y);r.strokeStyle=G,r.lineWidth=st,r.setLineDash(lt),r.stroke(),r.setLineDash([])}}function D(L){let{axes:G,ranges:st,map:lt,deep:at}=u,ht=at?2.65:0,It=-ht,Pt="#a5a1c7",wt="rgba(128, 122, 180, .34)",Jt=[],Wt=(Ut,R,$t=!1)=>F([L(Ut),L(R)],$t?Pt:wt,$t?1.2:1),St=(Ut,R,$t=!1)=>{Ut&&Jt.push({value:String(Ut),point:L(R),heading:$t})},Xt=a<475?5:7;for(let Ut of Zu(G[0],st[0],Xt)){let[R]=lt(Ut.value,st[1][0],st[2][0]);Wt([R,0,It],[R,5,It]),at&&Wt([R,0,It],[R,0,ht]),St(Ut.label,[R,-.32,ht+.17])}for(let Ut of Zu(G[1],st[1],5)){let[,R]=lt(st[0][0],Ut.value,st[2][0]);Wt([-4.25,R,It],[4.25,R,It]),at&&Wt([-4.25,R,It],[-4.25,R,ht]),St(Ut.label,[-4.25-.52,R,ht+.09])}if(at){for(let Ut of Zu(G[2],st[2],5)){let[,,R]=lt(st[0][0],st[1][0],Ut.value);Wt([-4.25,0,R],[4.25,0,R]),St(Ut.label,[4.25+.31,-.29,R])}Wt([4.25,0,ht],[4.25,0,It],!0),St(G[2]?.label,[4.25-.44,5+.39,It],!0)}else St("Flat data plane",[4.25-.57,5+.43,0]);return Wt([-4.25,0,ht],[4.25,0,ht],!0),Wt([-4.25,0,ht],[-4.25,5,ht],!0),St(G[0]?.label,[0,-.81,ht+.16],!0),St(G[1]?.label,[-4.25+.53,5+.42,ht],!0),Jt}function k(L){let G=[];r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",L.sort((st,lt)=>Number(lt.heading)-Number(st.heading));for(let{value:st,point:lt,heading:at}of L){let ht=at?13:11,It=a*.32;r.font=(at?"650 ":"500 ")+ht+"px system-ui, sans-serif";let Pt=Math.min(It,r.measureText(st).width)/2+3,wt=Qi(lt.x,Pt+2,a-Pt-2),Jt=lt.y;if(Jt<8||Jt>o-7||lt.x<-Pt||lt.x>a+Pt)continue;let Wt={left:wt-Pt,right:wt+Pt,y:Jt};G.some(St=>St.right>=Wt.left&&St.left<=Wt.right&&Math.abs(St.y-Jt)<ht+3)||(G.push(Wt),r.lineWidth=4,r.strokeStyle="#111020",r.fillStyle=at?"#f4edff":"#cec7e3",r.strokeText(st,wt,Jt,It),r.fillText(st,wt,Jt,It))}}function C(L){r.beginPath(),r.moveTo(L[0].x,L[0].y);for(let G of L.slice(1))r.lineTo(G.x,G.y);r.closePath()}function W(L,G){let{map:st,ranges:lt,baseline:at,barWidth:ht,spec:It}=u;if(L.y===at)return[];let[Pt,wt,Jt]=st(L.x,L.y,L.z),[,Wt]=st(L.x,at,L.z),St=ji(L.width,0)>0?4.25*L.width/(lt[0][1]-lt[0][0]):ht,Xt=Math.min(Wt,wt),Ut=Math.max(Wt,wt),R=Jt+.34,$t=Jt-.34,te=[[Pt-St,Xt,$t],[Pt+St,Xt,$t],[Pt+St,Ut,$t],[Pt-St,Ut,$t],[Pt-St,Xt,R],[Pt+St,Xt,R],[Pt+St,Ut,R],[Pt-St,Ut,R]].map(G),se=L.id===It.selectedId;return PT.flatMap(_t=>{let me=_t.corners.map(Ft=>te[Ft]);return IT(me)>=-.002?[]:[{depth:me.reduce((Ft,Ot)=>Ft+Ot.depth,0)/me.length,point:L,contains:(Ft,Ot)=>CT(me,Ft,Ot),paint(){C(me),r.fillStyle=L.color||"#b997ff",r.fill(),r.fillStyle=_t.shade,r.fill(),r.lineWidth=se?2:.75,r.strokeStyle=se?"#fff398":"rgba(238, 229, 255, .42)",r.stroke()}}]})}function Y(L,G){let{map:st,spec:lt}=u,at=G(st(L.x,L.y,L.z)),ht=L.id===lt.selectedId,It=Qi(at.scale*(lt.kind==="line"?.092:.13),2.2,9)*(ht?1.37:1);return{depth:at.depth,point:L,contains:(Pt,wt)=>Math.hypot(Pt-at.x,wt-at.y)<=Math.max(It,7),paint(){let Pt=r.createRadialGradient(at.x-It*.3,at.y-It*.35,0,at.x,at.y,It);Pt.addColorStop(0,"rgba(255, 255, 255, .68)"),Pt.addColorStop(.44,"rgba(255, 255, 255, .08)"),Pt.addColorStop(1,"rgba(1, 2, 20, .34)"),r.beginPath(),r.arc(at.x,at.y,It,0,Math.PI*2),r.fillStyle=L.color||"#abf659",r.fill(),r.fillStyle=Pt,r.fill(),r.strokeStyle=ht?"#fff398":"rgba(246, 240, 255, .55)",r.lineWidth=ht?2.3:.8,r.stroke()}}}function H(L){let{spec:G,points:st,map:lt}=u,at=G.kind==="bars"||G.kind==="histogram"?st.flatMap(wt=>W(wt,L)):st.map(wt=>Y(wt,L)),ht=(G.guides||[]).filter(wt=>!wt.only2D),It=({points:wt,color:Jt,dash:Wt,opacity:St})=>{let Xt=wt.map(([Ut,R,$t])=>Number.isFinite(Ut)&&Number.isFinite(R)?L(lt(Ut,R,$t)):null);return Xt.slice(1).flatMap((Ut,R)=>{let $t=Xt[R];return!$t||!Ut?[]:[{depth:($t.depth+Ut.depth)/2-.01,paint(){r.save(),r.globalAlpha=ji(St,1),F([$t,Ut],Jt||"#bba9f3",2,Wt?[5,4]:[]),r.restore()}}]})};return[...G.kind==="line"?It({points:st.map(wt=>[wt.x,wt.y,wt.z]),color:st[0]?.color}):[],...ht.flatMap(It),...at].sort((wt,Jt)=>wt.depth-Jt.depth)}function nt(L){if(d=0,m||!S())return;let G=_?Qi(L-_,0,52):16;_=L;let st=x&&!s?.matches&&!T.size;st&&(l+=G*27e-5);let lt=r.createLinearGradient(0,0,a,o);if(lt.addColorStop(0,"#09121b"),lt.addColorStop(.55,"#101024"),lt.addColorStop(1,"#22102a"),r.fillStyle=lt,r.fillRect(0,0,a,o),u){let at=P(),ht=D(at),It=H(at);for(let Pt of It)Pt.paint();p=It.filter(Pt=>Pt.point).reverse(),k(ht)}st&&g()}function q(L){if(m)return;let G=L.axes||[],st=(L.points||[]).filter(St=>Number.isFinite(St.x)&&Number.isFinite(St.y)),lt=st.map(St=>ji(St.z,0)),at=new Set(lt).size>1||(L.guides||[]).some(St=>!St.only2D&&new Set(St.points.map(Xt=>ji(Xt[2],0))).size>1),ht=[$u(G[0]),$u(G[1]),$u(G[2],Math.min(...lt,0),Math.max(...lt,1))],[It,Pt,wt]=ht,Jt=(St,Xt,Ut)=>[-4.25+2*4.25*(St-It[0])/(It[1]-It[0]),5*(Xt-Pt[0])/(Pt[1]-Pt[0]),at?2.65-2*2.65*(ji(Ut,wt[0])-wt[0])/(wt[1]-wt[0]):0],Wt=u?.deep!==at;u={spec:L,axes:G,points:st,deep:at,ranges:ht,map:Jt,baseline:Qi(0,Pt[0],Pt[1]),barWidth:4.25*.66/Math.max(1,new Set(st.map(St=>St.x)).size)},Wt&&U(),g()}function Z(L){let G=n.getBoundingClientRect(),st=L.clientX-G.left,lt=L.clientY-G.top;return p.find(at=>at.contains(st,lt))?.point??null}function it(L){L!==M&&(M=L,e(L))}function Ct(L){Number.isFinite(L)&&(l+=L,g())}function Bt(L){!Number.isFinite(L)||L<=0||(f=Qi(f*L,8.4,41),g())}function J(L){L.pointerType==="mouse"&&L.button!==0||(T.set(L.pointerId,{x:L.clientX,y:L.clientY}),n.setPointerCapture?.(L.pointerId),T.size===1?(E={x:L.clientX,y:L.clientY},v=!0):v=!1)}function dt(L){let G=T.get(L.pointerId);if(!G){L.pointerType==="mouse"&&!L.buttons&&it(Z(L));return}let st={x:L.clientX,y:L.clientY};if(T.size===1)Math.hypot(st.x-E.x,st.y-E.y)>4&&(v=!1),v||(l-=(st.x-G.x)*.009,h=Qi(h+(st.y-G.y)*.009,-.65,1.17));else if(T.size===2){let[,lt]=[...T].find(([It])=>It!==L.pointerId),at=Math.hypot(G.x-lt.x,G.y-lt.y),ht=Math.hypot(st.x-lt.x,st.y-lt.y);at>5&&ht>5&&Bt(at/ht)}T.set(L.pointerId,st),g()}function Et(L){if(T.has(L.pointerId)){if(L.type==="pointerup"&&T.size===1&&v){let G=Z(L);G&&t(G)}T.delete(L.pointerId),v=!1,g()}}function et(L){L.preventDefault();let G=L.deltaY*(L.deltaMode===1?14:L.deltaMode===2?o:1);Bt(Math.exp(Qi(G*.00145,-.6,.6)))}let ot=[["pointerdown",J],["pointermove",dt],["pointerup",Et],["pointercancel",Et],["lostpointercapture",Et],["pointerleave",()=>it(null)],["wheel",et,{passive:!1}]];for(let[L,G,st]of ot)n.addEventListener(L,G,st);let zt=new ResizeObserver(g);return zt.observe(n),s?.addEventListener?.("change",g),U(),{draw:q,reset:U,rotate:Ct,zoom:Bt,setOrbit(L){x=!!L,_=0,g()},destroy(){if(!m){m=!0,cancelAnimationFrame(d),zt.disconnect(),s?.removeEventListener?.("change",g);for(let[L,G,st]of ot)n.removeEventListener(L,G,st);n.style.touchAction=A,delete n.dataset.renderer,T.clear()}}}}var He=n=>document.getElementById(n),Mg=n=>`Day ${String(n.day).padStart(2,"0")}`,xa=n=>n.split("/").at(-1).toLowerCase();function Sg(n){return`#lectures/day-${String(n).padStart(2,"0")}`}function wg(){let n=He("lecture-select"),t=He("lecture-file"),e=He("deck-stage"),i=He("deck-page"),r=He("deck-original"),s={deck:null,copy:null,page:1,revision:0,renderVersion:0,slots:new Map,reader:null,loading:null,pdf:null,rendering:null,url:null},a,o,c=0,l=0,h=er.map(v=>new Option(`${Mg(v)} \xB7 ${v.title} \xB7 ${v.pages} slides`,v.day));n.replaceChildren(...h);function f(v){He("library-status").textContent=v}function u(v){let T=document.createElement("p");T.className="deck-placeholder",T.textContent=v,e.replaceChildren(T)}function d(){s.renderVersion++,s.rendering?.cancel(),s.rendering=null,s.loading?.destroy().catch(()=>{}),s.loading=null,s.pdf=null,s.url&&URL.revokeObjectURL(s.url),s.url=null,r.hidden=!0,r.removeAttribute("href")}function _(){let v=s.pdf?.numPages??s.deck?.pages??0,T=!!s.pdf;i.disabled=!T,i.max=v||1,i.value=s.page,He("deck-total").textContent=v?`of ${v}`:"",He("deck-first").disabled=He("deck-prev").disabled=!T||s.page===1,He("deck-next").disabled=He("deck-last").disabled=!T||s.page===v}function x(v){if(!s.deck)return;let T=Number(v),A=s.pdf?.numPages??s.deck.pages;s.page=Number.isInteger(T)?Math.min(A,Math.max(1,T)):s.page,_(),m()}async function m(){if(!s.pdf)return;let v=++s.renderVersion,T=s.page,A=s.pdf;s.rendering?.cancel();try{let g=await A.getPage(T);if(v!==s.renderVersion)return;let S=g.getViewport({scale:1}),U=Math.max(120,e.clientWidth),P=Math.min(window.devicePixelRatio||1,2),F=Math.min(U*P/S.width,3e3/Math.max(S.width,S.height)),D=g.getViewport({scale:F}),k=document.createElement("canvas");k.width=Math.ceil(D.width),k.height=Math.ceil(D.height),k.style.width="100%",k.setAttribute("aria-label",`${s.deck.title}, original slide ${T} of ${A.numPages}`);let C=g.render({canvas:k,viewport:D});if(s.rendering=C,await C.promise,v!==s.renderVersion)return;e.replaceChildren(k),e.dataset.page=String(T),s.rendering=null,g.cleanup()}catch(g){v===s.renderVersion&&g.name!=="RenderingCancelledException"&&u("This page could not be rendered. Use Open original PDF to inspect it.")}}async function p(v,T=1){let A=++s.revision;d(),delete e.dataset.page,s.deck=v,s.page=1,n.value=v.day,He("lecture-author").textContent=`Original lecture slides by ${v.author}.`,x(T);let g=s.slots.get(xa(v.file));if(!g){u(`${v.title}. Select the course ZIP or ${v.file} to view this deck.`),f(s.slots.size?`${s.slots.size} original decks available from your file selection.`:"Files stay in your browser.");return}u(`Opening ${Mg(v)}\u2026`);try{let S=await g();if(A!==s.revision)return;let U=new URL("./pdf/pdf.js",document.baseURI).href,P=await(a??=import(U));if(A!==s.revision)return;P.GlobalWorkerOptions.workerSrc=new URL("./pdf/pdf.worker.js",document.baseURI).href;let F=await S.arrayBuffer();if(A!==s.revision)return;let D=P.getDocument({data:F,isEvalSupported:!1,enableXfa:!1,cMapUrl:new URL("./pdf/cmaps/",document.baseURI).href,cMapPacked:!0,standardFontDataUrl:new URL("./pdf/standard_fonts/",document.baseURI).href,wasmUrl:new URL("./pdf/wasm/",document.baseURI).href,iccUrl:new URL("./pdf/iccs/",document.baseURI).href});s.loading=D;let k=await D.promise;if(A!==s.revision)return;s.pdf=k,s.url=URL.createObjectURL(S),r.href=s.url,r.hidden=!1,f(`${s.slots.size} original deck${s.slots.size===1?"":"s"} loaded from this device. ${s.pdf.numPages===v.pages?"":`This copy contains ${s.pdf.numPages} slides.`}`.trim()),s.page=Math.min(s.page,s.pdf.numPages),_(),await m()}catch{if(A!==s.revision)return;f(`Unable to open ${v.file}. Select the original file again.`),u("The reader could not open this document.")}}let M=0;async function E(v){if(!v)return;let T=++M,A=new Map(er.map(g=>[xa(g.file),g]));try{if(v.name.toLowerCase().endsWith(".zip")){f("Reading the lecture directory in your ZIP\u2026");let S=await(o??=import("./chunks/zip-IANKA23E.js")),U=new S.ZipReader(new S.BlobReader(v),{useWebWorkers:!1}),P;try{P=await U.getEntries()}catch(k){throw await U.close(),k}if(T!==M){await U.close();return}let F=P.filter(k=>!k.directory&&/(?:^|\/)slides\/[^/]+\.pdf$/i.test(k.filename.replaceAll("\\","/"))&&A.has(xa(k.filename.replaceAll("\\","/")))&&k.uncompressedSize<=3e7);if(!F.length)throw await U.close(),Error("No matching lecture PDFs were present.");let D=s.reader;s.reader=U,s.slots=new Map(F.map(k=>[xa(k.filename.replaceAll("\\","/")),()=>k.getData(new S.BlobWriter("application/pdf"),{checkSignature:!0,useWebWorkers:!1})])),D&&await D.close().catch(()=>{})}else{let S=xa(v.name);if(!A.has(S))throw Error("Select a PDF with its original lecture filename.");s.slots.set(S,async()=>new Blob([v],{type:"application/pdf"}));let U=A.get(S);if(s.deck?.day!==U.day){location.hash=Sg(U.day);return}}let g=s.deck??er[1];await p(g,s.page)}catch(g){T===M&&f(g.message||"The course file could not be opened.")}}return n.addEventListener("change",()=>{location.hash=Sg(n.value)}),t.addEventListener("change",()=>{let v=t.files?.[0];t.value="",E(v)}),He("deck-first").onclick=()=>x(1),He("deck-prev").onclick=()=>x(s.page-1),He("deck-next").onclick=()=>x(s.page+1),He("deck-last").onclick=()=>x(s.pdf?.numPages),i.addEventListener("change",()=>x(i.value)),e.addEventListener("keydown",v=>{let T={Home:1,End:s.pdf?.numPages,ArrowLeft:s.page-1,ArrowRight:s.page+1};!s.pdf||!Object.hasOwn(T,v.key)||(v.preventDefault(),x(T[v.key]))}),new ResizeObserver(()=>{let v=e.clientWidth;v<=0||Math.abs(v-c)<2||(c=v,cancelAnimationFrame(l),l=requestAnimationFrame(()=>{m()}))}).observe(e),{open(v,T=1){let A=er.find(g=>g.day===Number(v))??er[1];A!==s.deck?p(A,T):x(T)}}}var rt=n=>document.getElementById(n),Tg=rt("course-nav"),dc=rt("chart-2d"),Ng=rt("chart-3d"),Lg=rt("chart-3d-software"),mc=matchMedia("(prefers-reduced-motion: reduce)"),Dg="data-viz-with-julie.quiz.v1",Ug="data-viz-with-julie.quiz-session.v1",tr=bc.flatMap((n,t)=>n.lessons.map(e=>({unit:n,index:t,lesson:e}))),ns=({unit:n,lesson:t,deck:e})=>e?`#course/${e.id}`:`#${n.id}/${t.id}`,is=({unit:n,lesson:t,deck:e})=>e?`#quiz/fall-2026/${e.id}`:`#quiz/${n.id}/${t.id}`,pt={current:null,slide:0,mode:"3d",selected:null,options:{},spec:null,orbit:!mc.matches,quiz:!1},Fe,Ma,Fg=!1,Ku=!0,Og,Qu,NT,Ag,ya,ju,Eg,Rg,fc,Ju=0,Cg={"visual-encoding":1,"time-series":1,correlation:2,distributions:2,"sql-group-by":4,"sql-time-buckets":4,"web-encoding":12,"web-linked-selection":18,"analytics-binning":25,"d3-data-join":23,"server-query":5,"live-refresh":10,"pandas-prep":27,"visual-mining":28};function kg(n){try{let t=JSON.parse(localStorage.getItem(n)||"{}");if(t&&typeof t=="object"&&!Array.isArray(t))return t}catch{}return{}}var ai=kg(Dg),pc=kg(Ug);function ce(n,t,e){let i=document.createElement(n);return t!=null&&(i.textContent=t),e&&(i.className=e),i}function gc(){try{localStorage.setItem(Dg,JSON.stringify(ai)),localStorage.setItem(Ug,JSON.stringify(pc))}catch{}}function Bg(n){return n.quiz.reduce((t,e,i)=>t+ +(ai[n.id]?.[i]===e.correct),0)}function zg(){let n=new Set([...Tg.querySelectorAll("details[open]")].map(e=>e.dataset.unit)),t=0;Tg.replaceChildren(...bc.map((e,i)=>{let r=ce("details",null,"course-group");r.dataset.unit=e.id,r.open=e===pt.current.unit||n.has(e.id),r.append(ce("summary",`Unit ${i+1} \xB7 ${e.title}`));let s=ce("ul",null,"course-links");for(let a of e.lessons){let o=ce("li"),c=ce("a",a.title),l=Bg(a)===a.quiz.length;if(t+=Number(l),c.href=ns({unit:e,lesson:a}),a===pt.current.lesson&&c.setAttribute("aria-current","page"),l){let h=ce("span","\u2713");h.setAttribute("aria-label","Quiz complete"),c.append(h)}o.append(c),s.append(o)}return r.append(s),r})),rt("course-progress").textContent=`${t} / ${tr.length} quizzes complete`}function Vg(){let{slides:n}=pt.current.lesson,t=n[pt.slide],e=Array.isArray(t.body)?t.body:[t.body];function i(){let r=ce("div",null,"try");return r.append(ce("strong","Try it in the lab"),ce("div",t.example)),[...e.map(s=>ce("p",s)),r]}rt("slide-content").replaceChildren(ce("h3",t.title),...i()),rt("slide-count").textContent=`${pt.slide+1} / ${n.length}`,rt("present-title").textContent=t.title,rt("present-lesson").textContent=pt.current.lesson.title,rt("present-count").textContent=rt("slide-count").textContent,rt("present-content").replaceChildren(...i());for(let r of["slide-first","slide-prev","present-first","present-prev"])rt(r).disabled=pt.slide===0;for(let r of["slide-next","slide-last","present-next","present-last"])rt(r).disabled=pt.slide===n.length-1}function va(n){pt.slide=Math.max(0,Math.min(n,pt.current.lesson.slides.length-1)),Vg()}function tf(n,t){let e=ai[n.id]?.[t];return Number.isInteger(e)&&n.quiz[t].options[e]!=null?e:null}function Sa(){let n=pt.current.lesson,t=pc[n.id];if(t&&Number.isInteger(t.index)&&t.index>=0&&t.index<n.quiz.length&&Array.isArray(t.missed))return t;let e=n.quiz.findIndex((r,s)=>tf(n,s)===null),i={index:Math.max(0,e),summary:!1,missed:[]};return pc[n.id]=i,i}function ba(n,t=!1){let e=Sa();e.index=Math.max(0,Math.min(n,pt.current.lesson.quiz.length-1)),e.summary=t,gc(),wa("prompt")}function wa(n){let t=pt.current.lesson,e=Sa(),{index:i,summary:r}=e,s=t.quiz.length,a=t.quiz.filter((h,f)=>tf(t,f)!==null).length,o=Bg(t);rt("quiz-topic").value=is(pt.current);let c=rt("quiz-jump");c.replaceChildren(...t.quiz.map((h,f)=>new Option(`Question ${f+1}`,f))),c.value=i,rt("quiz-progress").max=s,rt("quiz-progress").value=a,rt("quiz-position").textContent=r?`${a} of ${s} answered`:`Question ${i+1} of ${s} \xB7 ${a} answered`,rt("quiz-score").textContent=`${o} / ${s} correct`,rt("quiz-prev").hidden=!!r,rt("quiz-prev").disabled=i===0,rt("quiz-next").textContent=r?"Review questions":i===s-1?"Finish quiz":"Next question",rt("questions").hidden=!!r,rt("quiz-summary").hidden=!r,rt("questions").replaceChildren(),rt("quiz-summary").replaceChildren();let l=tf(t,i);if(rt("quiz-retry").hidden=!!r,rt("quiz-retry").disabled=l===null,r){let h=ce("h3","Quiz results");h.tabIndex=-1,rt("quiz-summary").append(h,ce("p",`You answered ${o} of ${s} questions correctly.`),ce("p",a===s?"Review your answers or return to the lesson.":`You have ${s-a} unanswered question${s-a===1?"":"s"}.`)),n&&h.focus()}else{let h=t.quiz[i],f=l===h.correct,u=new Set(Array.isArray(e.missed[i])?e.missed[i]:[]);l!==null&&!f&&u.add(l);let d=ce("fieldset",null,"question"),_=ce("legend",h.prompt);_.tabIndex=-1,d.append(_);for(let[m,p]of h.options.entries()){let M=ce("button",null,"answer-option");M.type="button",M.disabled=f||u.has(m),M.dataset.result=f&&m===l?"correct":u.has(m)?"wrong":"";let E=ce("span",String.fromCharCode(65+m));E.setAttribute("aria-hidden","true"),M.append(E,ce("span",p)),M.onclick=()=>{Array.isArray(ai[t.id])||(ai[t.id]=[]),ai[t.id][i]=m,m!==h.correct&&u.add(m),e.missed[i]=[...u],gc(),wa("feedback")},d.append(M)}let x=ce("p",l===null?"":`${f?"Correct.":"Try again."} ${h.explanation}`,"quiz-feedback");x.setAttribute("role","status"),x.hidden=l===null,x.tabIndex=-1,x.classList.toggle("correct",f),d.append(x),rt("questions").append(d),n==="feedback"&&x.focus({preventScroll:!0}),n==="prompt"&&_.focus({preventScroll:!0})}zg()}function _c(n){if(!pt.spec.points.some(e=>e.id===n))return;let t=pt.selected;pt.selected=n,rt("mark").value=n,Ta(),pt.mode==="2d"?Og?.(n):t!==n&&ss();for(let e of rt("chart-data").querySelectorAll("[data-id]"))e.classList.toggle("selected",e.dataset.id===n)}function Ta(n){let t=n||pt.spec.points.find(e=>e.id===pt.selected);rt("mark-value").textContent=t?t.label:"Select a mark to read its values."}function LT(){let{columns:n,rows:t}=fp(pt.spec.points),e=ce("table");e.setAttribute("aria-label",pt.spec.title+" chart data");let i=ce("thead"),r=ce("tr");for(let a of n){let o=ce("th",a);o.scope="col",r.append(o)}i.append(r),e.append(i);let s=ce("tbody");for(let a of t){let o=ce("tr",null,a.id===pt.selected?"selected":null);o.dataset.id=a.id,a.cells.forEach((c,l)=>{let h=ce("td");if(l===0){let f=ce("button",c);f.type="button",f.addEventListener("click",()=>_c(a.id)),h.append(f)}else h.textContent=c;o.append(h)}),s.append(o)}e.append(s),rt("chart-data").replaceChildren(e)}function DT(){if(Qu.replaceChildren(...pt.spec.controls.map(n=>{let t=ce("label",n.label),e=ce("select");e.id=`control-${n.key}`,e.setAttribute("aria-label",n.label);for(let i of n.options)e.append(new Option(i.label,i.value));return e.value=pt.options[n.key]??n.options[0].value,e.addEventListener("change",()=>{clearInterval(ya),pt.options[n.key]=e.value,ef(n.key)}),t.append(e),t})),pt.current.lesson.id==="live-refresh"){let n=ce("button","Replay updates","replay-button");n.type="button",n.addEventListener("click",()=>{clearInterval(ya);let t=rt("control-cutoff"),e=t.options.length-1;function i(){t.selectedIndex=e--,pt.options.cutoff=t.value,ef("cutoff"),e<0&&clearInterval(ya)}i(),ya=setInterval(i,850)}),Qu.append(n)}}function ef(n){let t=pt.spec?.points;pt.spec=up(pt.current.lesson.id,pt.options);let e=rt("chart-change");if(pt.spec.keyed&&n==="snapshot"&&t){let i=new Set(t.map(c=>c.id)),r=new Set(pt.spec.points.map(c=>c.id)),s=[...r].filter(c=>!i.has(c)),a=[...i].filter(c=>!r.has(c)),o=[...r].filter(c=>i.has(c)).length;e.textContent=`Entered: ${s.join(", ")||"none"}. Retained: ${o}. Exited: ${a.join(", ")||"none"}.`,e.hidden=!1}else(!pt.spec.keyed||!n)&&(e.hidden=!0);pt.spec.points.some(i=>i.id===pt.selected)||(pt.selected=null),rt("chart-title").textContent=pt.spec.title,rt("chart-caption").textContent=pt.spec.caption,rt("metrics").replaceChildren(...pt.spec.stats.map(i=>{let r=ce("div",null,"metric");return r.append(ce("span",i.label),ce("b",i.value),ce("small",i.detail)),r})),rt("mark").replaceChildren(new Option("Select\u2026",""),...pt.spec.points.map(i=>new Option(i.name,i.id))),rt("mark").value=pt.selected??"",Ta(),LT(),ss()}function ss(){if(!pt.spec)return;let n={...pt.spec,selectedId:pt.selected};pt.mode==="3d"?Fe?.draw(n):(n.kind==="line"&&n.guides?.length&&(n.guides=[{points:n.points.map(t=>[t.x,t.y,t.z]),color:n.points[0].color},...n.guides]),Og=_p(dc,n,{onSelect:_c,onHover:(t,e)=>Ta(e)}),Ag!==pt.spec&&!n.keyed&&!mc.matches&&(dc.querySelectorAll(".data-mark").forEach((t,e)=>{t.animate([{opacity:.28},{opacity:1}],{duration:320,delay:Math.min(120,e*10),easing:"ease-out"})}),Ag=pt.spec)),rt("chart-note").textContent=pt.mode==="3d"?`${Ma==="software"?"Software 3D. ":""}${n.axisNote} Swipe or drag to rotate. Pinch or scroll to zoom.`:"Select a mark or use the data table to inspect exact values."}function Ig(){Fg=!0,rt("view-3d").disabled=!0,rt("chart-warning").hidden=!1,rt("chart-warning").textContent="This browser blocked both 3D rendering methods. The interactive 2D chart is available.",xc("2d")}var Gg={onSelect:n=>_c(n.id),onHover:n=>Ta(n)};function rs(){let n=pt.mode;dc.hidden=n==="3d",Ng.hidden=n==="2d"||Ma==="software",Lg.hidden=n==="2d"||Ma!=="software",rt("camera-tools").hidden=n==="2d",rt("view-2d").setAttribute("aria-pressed",String(n==="2d")),rt("view-3d").setAttribute("aria-pressed",String(n==="3d")),rt("camera-orbit").setAttribute("aria-pressed",String(pt.orbit)),Fe?.setOrbit(n==="3d"&&pt.orbit&&Ku)}function Pg(){if(Fe?.destroy(),Ma="software",rs(),Fe=bg(Lg,{...Gg,onUnavailable:Ig}),!Fe){Ig();return}rs(),ss()}function xc(n){if(n==="3d"&&Fg&&(n="2d"),pt.mode=n,n==="3d"&&!Fe){Ma="three",rs();let t=!0;if(Fe=vg(Ng,{...Gg,onUnavailable:()=>{t||Pg()}}),t=!1,!Fe){Pg();return}}rs(),ss()}async function Hg(n=!1){let t=location.hash;if(!n&&["#lab","#slides","#lesson"].includes(t))return;let e=++Ju;clearInterval(ya);let i=t.match(/^#lectures(?:\/day-(\d{1,2})(?:\/page-(\d+))?)?$/),r=t.match(/^#course(?:\/([\w-]+)(?:\/(?:(page|slide)-(\d+)|overview))?)?$/),s=t.match(/^#quiz\/fall-2026\/([\w-]+)$/);if(rt("lesson").hidden=!!(i||r||s),rt("lecture-library").hidden=!i,rt("fall-course").hidden=!(r||s),r?rt("lecture-nav").setAttribute("aria-current","page"):rt("lecture-nav").removeAttribute("aria-current"),r||s){Fe?.setOrbit(!1);let d=rt("fall-status");d.hidden=!1,d.textContent="Loading lectures\u2026",window.scrollTo({top:0,behavior:"instant"});let _;try{_=await(Eg??=import("./chunks/reader-UYJA6M2S.js"))}catch{Eg=void 0,e===Ju&&(d.textContent="The lectures could not be loaded. Refresh this page to retry.");return}if(e!==Ju)return;if(d.hidden=!0,Rg??=_.createCourseReader({host:rt("fall-course"),labs:tr.map(x=>({day:Cg[x.lesson.id],title:x.lesson.title,href:ns(x)}))}),r){let x=r[2]==="slide"||t.endsWith("/overview"),m=Rg.open(r[1],Number(r[3]??1),x);for(let p of document.querySelectorAll("[data-quiz-link]"))p.href=is({deck:m});n||rt("fall-title").focus({preventScroll:!0});return}if(fc??=_.decks.filter(x=>x.quiz?.length).map(x=>({deck:x,unit:null,index:-1,lesson:{id:`fall-2026-${x.id}`,title:x.title,quiz:x.quiz}})),!fc.some(x=>x.deck.id===s[1])){location.replace(ns({deck:_.decks.find(x=>x.id===s[1])??_.decks[0]}));return}rt("lesson").hidden=!1,rt("fall-course").hidden=!0}if(i){Fe?.setOrbit(!1),(NT??=wg()).open(i[1]??1,i[2]??1),document.title="Fall 2025 source decks | Data Viz with Julie",n||rt("library-title").focus({preventScroll:!0});return}let a=t==="#quiz"||t.startsWith("#quiz/"),o=s?fc.find(d=>d.deck.id===s[1]):t==="#quiz"?pt.current??tr[0]:tr.find(d=>(a?is(d):ns(d))===t)??tr[0],c=pt.current!==o;pt.current=o,pt.quiz=a,c&&(pt.slide=0,pt.options={},pt.selected=null,pt.spec=null);let{unit:l,index:h,lesson:f,deck:u}=o;document.querySelector(".studio").hidden=a,rt("quiz").hidden=!a,rt("unit-line").textContent=u?"Fall 2026 \xB7 Lecture quiz":`Unit ${h+1} \xB7 ${a?"Quiz":l.title}`,rt("lesson-title").textContent=f.title,rt("lesson-subtitle").textContent=a?"Choose an answer to get feedback, then move to the next question.":f.subtitle,u||(rt("open-source-deck").href=`#course/day-${String(Cg[f.id]??1).padStart(2,"0")}`);for(let d of document.querySelectorAll("[data-quiz-link]"))d.href=is(o);rt("quiz-return").href=ns(o),rt("quiz-return").textContent=u?"Back to lecture":"Back to lesson",rt("course-note").textContent=u?"Fall 2026 lecture quiz by":`Based on ${l.reference.trim().replace(/\.$/,"")}. Slides and examples were created for this site. All chart data is synthetic.`,document.title=`${f.title}${a?" quiz":""} | Data Viz with Julie`,a?(Fe?.setOrbit(!1),UT(),wa()):(rt("questions").replaceChildren(),rt("quiz-summary").replaceChildren(),pt.spec||(rt("data-details").open=!1,ef(),DT(),Vg()),xc(pt.mode),zg()),n||(rt("lesson-title").tabIndex=-1,rt("lesson-title").focus({preventScroll:!0}),(rt(ju)??rt("lesson")).scrollIntoView({behavior:"instant"})),ju=null}Qu=rt("chart-controls");for(let n of["slide","present"])rt(n+"-first").onclick=()=>va(0),rt(n+"-prev").onclick=()=>va(pt.slide-1),rt(n+"-next").onclick=()=>va(pt.slide+1),rt(n+"-last").onclick=()=>va(pt.current.lesson.slides.length-1);rt("present-slides").onclick=()=>rt("presenter").showModal();rt("present-close").onclick=()=>rt("presenter").close();document.addEventListener("keydown",n=>{if(!rt("presenter").open)return;let t={Home:0,End:pt.current.lesson.slides.length-1,ArrowLeft:pt.slide-1,ArrowRight:pt.slide+1};Object.hasOwn(t,n.key)&&(n.preventDefault(),va(t[n.key]))});function UT(){let n=document.createElement("optgroup");n.label="Interactive labs",n.append(...tr.map(e=>new Option(e.lesson.title,is(e))));let t=document.createElement("optgroup");t.label="Fall 2026 lectures",t.append(...(fc??[]).map(e=>new Option(e.lesson.title,is(e)))),rt("quiz-topic").replaceChildren(n,...t.children.length?[t]:[])}rt("quiz-topic").onchange=n=>{location.hash=n.currentTarget.value};rt("quiz-jump").onchange=n=>ba(Number(n.currentTarget.value));rt("quiz-prev").onclick=()=>ba(Sa().index-1);rt("quiz-next").onclick=()=>{let n=Sa();n.summary?ba(0):n.index===pt.current.lesson.quiz.length-1?ba(n.index,!0):ba(n.index+1)};rt("quiz-retry").onclick=()=>{let n=Sa(),t=pt.current.lesson;Array.isArray(ai[t.id])&&(ai[t.id][n.index]=null),n.missed[n.index]=[],gc(),wa("prompt")};rt("quiz-reset").onclick=()=>{delete ai[pt.current.lesson.id],delete pc[pt.current.lesson.id],gc(),wa("prompt")};rt("mark").onchange=n=>{let t=n.currentTarget.value;t?_c(t):(pt.selected=null,Ta(),ss())};rt("view-2d").onclick=()=>xc("2d");rt("view-3d").onclick=()=>xc("3d");rt("camera-left").onclick=()=>Fe?.rotate(.28);rt("camera-right").onclick=()=>Fe?.rotate(-.28);rt("camera-in").onclick=()=>Fe?.zoom(.81);rt("camera-out").onclick=()=>Fe?.zoom(1.24);rt("camera-reset").onclick=()=>Fe?.reset();rt("camera-orbit").onclick=()=>{pt.orbit=!pt.orbit,rs()};mc.addEventListener("change",n=>{n.matches&&(pt.orbit=!1,rs())});document.querySelector(".skip").addEventListener("click",n=>{n.preventDefault();let t=rt("fall-course").hidden?rt("lecture-library").hidden?rt("lesson"):rt("library-title"):rt("fall-title");t.focus(),t.scrollIntoView({behavior:"instant"})});for(let n of document.querySelectorAll("[data-section]"))n.addEventListener("click",t=>{if(t.preventDefault(),rt("lesson").hidden||pt.quiz){ju=n.dataset.section,location.hash=ns(pt.current?.unit?pt.current:tr[0]);return}rt(n.dataset.section).scrollIntoView({behavior:mc.matches?"instant":"smooth"})});window.addEventListener("hashchange",()=>Hg());new ResizeObserver(()=>{pt.mode==="2d"&&!pt.quiz&&ss()}).observe(dc);new IntersectionObserver(n=>{Ku=n[0].isIntersecting,Fe?.setOrbit(pt.mode==="3d"&&pt.orbit&&Ku)}).observe(document.querySelector(".plot"));Hg(!0);
/*! For license information please see app.js.LEGAL.txt */
