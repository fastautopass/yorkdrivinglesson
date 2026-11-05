// Researched local driving context for each area page (roads, junctions, landmarks).
// Drawn from public sources (Wikipedia, City of York Council, local history pages). Review with a local instructor before relying on any single detail.
export interface AreaGuide { area: string; guide: string; facts: string[] }
export const areaGuides: Record<string, AreaGuide> = {
  "/driving-lessons-clifton-york/": {
    "area": "Clifton",
    "guide": "Clifton is where the A19 leaves York heading north, so a lesson here begins on a proper through road rather than a quiet cul-de-sac. Burton Stone Lane, Water Lane, Haxby Road and Wigginton Road all feed in, giving you plenty of junctions to practise emerging safely. The Burton Stone Inn is a well-known corner to aim for, and Homestead Park offers a calmer street pattern nearby for manoeuvres. Follow the A19 outward and it meets the A1237 outer ring road at roundabouts, where choosing the right lane early matters.",
    "facts": [
      "The A19 passes north out of York through Clifton.",
      "Haxby Road and Wigginton Road both run through the area.",
      "Burton Stone Inn marks a well-known local junction.",
      "Clifton Moor retail park lies in neighbouring Clifton Without.",
      "The A19 meets the A1237 at roundabouts near Clifton."
    ]
  },
  "/driving-lessons-rawcliffe-york/": {
    "area": "Rawcliffe",
    "guide": "Rawcliffe is hemmed in by two big roads, the A19 and the A1237, which makes it a useful place to build confidence before tackling faster traffic. Inside, the pattern is suburban: estate streets, parked cars and the village centre around the Lysander Arms, plus Rawcliffe Lake as a landmark for finding your bearings. The A19 southbound roundabout on the ring road is the gateway to the Rawcliffe Bar Park and Ride, so expect buses and drivers who know exactly where they are going.",
    "facts": [
      "Rawcliffe is bordered by the A19 and A1237.",
      "It lies about 3 miles north-west of York.",
      "The A19 roundabout links to Rawcliffe Bar Park and Ride.",
      "Rawcliffe Lake and the Lysander Arms are local landmarks."
    ]
  },
  "/driving-lessons-bootham-york/": {
    "area": "Bootham",
    "guide": "Bootham is the street that runs out of the city centre from Bootham Bar, and it forms the first part of the A19 north-west. Expect tight, historic surroundings: the city walls, St Mary's Abbey wall, almshouses and the Churchill Hotel all sit close to the carriageway, so judging width and keeping a steady position is the skill to work on. The road crosses the York to Scarborough railway line before reaching the junction with Bootham Crescent and Queen Anne's Road, where it becomes Clifton. Bootham School and the former Bootham Park Hospital are on the street too.",
    "facts": [
      "Bootham leads north-west out of York city centre.",
      "It forms part of the A19.",
      "It starts at Bootham Bar in the city walls.",
      "The road crosses the York to Scarborough railway line.",
      "It ends at the Bootham Crescent and Queen Anne's Road junction."
    ]
  },
  "/driving-lessons-haxby-york/": {
    "area": "Haxby",
    "guide": "Haxby sits just outside the A1237, which makes the ring road roundabout at Haxby Road your first test of the day: it links Haxby to the north with New Earswick to the south. The town centre, known as The Village, is a conservation area with Ryedale Court shopping centre, the Village Green and Wyre Pond, so pedestrians and parked cars call for patience. Schools such as Headlands Primary and Ralph Butterfield School add to the morning and afternoon bustle. The railway station closed in 1930, so buses carry most public transport.",
    "facts": [
      "Haxby lies outside the A1237 York Outer Ring Road.",
      "Haxby Road roundabout connects Haxby with New Earswick.",
      "The town centre has been a conservation area since 1976.",
      "Haxby station closed in 1930.",
      "Ryedale Court Shopping Centre is in The Village."
    ]
  },
  "/driving-lessons-wigginton-york/": {
    "area": "Wigginton",
    "guide": "Wigginton is a commuter village roughly four miles north of York, sharing a continuous built-up area with Haxby on its east side. Its roads are flat and mostly straightforward, with Sutton Road's small arcade of shops and the B1363 along the western edge giving you narrower lanes and bus stops to deal with. The B1363 runs south to the A1237 at the Clifton Moor Gate roundabout, a good spot to practise approaching and leaving a roundabout in the right lane. Open farmland lies to the north, so you can also try quieter, faster country-style driving. Wigginton Primary School, St Nicholas Church and the Black Horse pub are handy landmarks for navigation exercises, and three pubs and a garden centre mean the odd delivery vehicle too.",
    "facts": [
      "Wigginton is about 4 miles north of York.",
      "The B1363 runs along the village's west side.",
      "The A1237 ring road lies to the south.",
      "The B1363 meets the A1237 at Clifton Moor Gate roundabout.",
      "Haxby adjoins Wigginton on the east."
    ]
  },
  "/driving-lessons-huntington-york/": {
    "area": "Huntington",
    "guide": "Huntington is a suburb on the northern side of York, bordered by the River Foss and the A1237 ring road. The Strensall Road roundabout joins Huntington to Earswick, so you can step from residential streets onto a busy ring road in minutes. Huntington Road, Huntington and Strensall Road and the Link Road carry local traffic. Huntington School, the primary schools and the York Community Stadium all generate varied traffic at different times of day, which is good for practising reading hazards. Old village streets near All Saints' Church are a conservation area, so take care there.",
    "facts": [
      "Huntington Road and Strensall Road serve the suburb.",
      "The Strensall Road roundabout on the A1237 links Huntington and Earswick.",
      "Huntington School is a comprehensive of about 1,500 pupils.",
      "York Community Stadium opened in 2021 on the old Huntington Stadium site."
    ]
  },
  "/driving-lessons-poppleton-york/": {
    "area": "Poppleton",
    "guide": "Poppleton covers Upper and Nether Poppleton, villages close to the A59, the York to Harrogate road. Poppleton railway station on the Harrogate Line is the first after York. The village greens and conservation area streets are calm, narrow places to practise careful speed control. Poppleton Ousebank Primary serves both villages.",
    "facts": [
      "Poppleton Bar Park and Ride is beside the A59.",
      "Poppleton station is the first stop on the Harrogate Line.",
      "Upper Poppleton has been a conservation area since 1993.",
      "Poppleton Ousebank Primary serves both villages.",
      "The A59 meets the A1237 at a roundabout."
    ]
  },
  "/driving-lessons-heworth-york/": {
    "area": "Heworth",
    "guide": "Heworth gives learners a good mix of straight arterial roads and tighter suburban streets. Heworth Green, which follows the line of an old Roman road, is the main way in from the city centre, and you will meet it, Heworth Road and Stockton Lane early on. Stockton Lane is lined with 1930s semi-detached houses, so expect parked cars and the need to judge gaps carefully. Around Heworth Village and Walney Road the streets narrow and junctions are close together, which is useful for practising observation and priority. Terraced streets such as East Parade lead back towards Layerthorpe.",
    "facts": [
      "Heworth Green follows the line of a Roman road",
      "Stockton Lane has 1930s semi-detached housing",
      "Walney Road meets Heworth Village at the former manor site",
      "Heworth Holme and Monk Stray provide open space nearby"
    ]
  },
  "/driving-lessons-tang-hall-york/": {
    "area": "Tang Hall",
    "guide": "Tang Hall is mostly 1930s housing, much of it built as council homes, so the roads are wide, regular and full of parked cars, ideal for mirror work, reversing and meeting oncoming traffic. Fourth Avenue and Fifth Avenue are the main residential spines, with Penyghent Avenue joining Fifth Avenue at a junction, and Tang Hall Lane and Melrosegate mark the western and northern edges. Hull Road forms the southern boundary and brings buses, students from the University of York and busier traffic lights. Archbishop Holgate's School lies just beyond Hull Road, so school-run timing matters. Local pull-ins include the library, surgery and community centre, plus a small parade of shops. Hull Road Park follows Osbaldwick Beck, and St Nicholas Fields nature reserve is close by.",
    "facts": [
      "Most Tang Hall housing dates from the 1930s",
      "Hull Road forms the southern boundary",
      "Penyghent Avenue meets Fifth Avenue at a junction",
      "Archbishop Holgate's School lies beyond Hull Road"
    ]
  },
  "/driving-lessons-osbaldwick-york/": {
    "area": "Osbaldwick",
    "guide": "Osbaldwick feels like a village that York has grown around. The old core is a rectangle of streets around a green, where Osbaldwick Beck runs through and Grade II listed St Thomas' Church stands, so lessons here suit slow, careful driving with narrow stretches and parked cars. Murton Way is the main village road, while Osbaldwick Link Road ties the village to Hull Road, the A1079. The A64, part of York's ring road, bounds the village on its eastern side, which makes it a natural starting point for practising dual carriageway slip roads. Green belt lies to the north, with Derwenthorpe, a newer housing development, beyond the village. Light industrial units sit along the link road.",
    "facts": [
      "Hull Road, south of the village, is the A1079",
      "The A64 ring road forms the eastern boundary",
      "Osbaldwick Link Road connects the village to the A1079",
      "St Thomas' Church is Grade II listed"
    ]
  },
  "/driving-lessons-murton-york/": {
    "area": "Murton",
    "guide": "Murton is a small village on the edge of York, with only around a hundred properties, so the roads are quiet and rural in feel compared with the city suburbs. That suits a learner building confidence on country-style lanes where there are few pavements and the occasional agricultural vehicle. Visitors to Murton Park and the Yorkshire Museum of Farming, which includes a Viking village, add some weekend traffic, and the York Livestock Centre is also in the village. The A166 runs out towards Bridlington, giving experience of a faster single carriageway, while the A64 is just to the west beside Osbaldwick. Expect mixed traffic and fewer junctions.",
    "facts": [
      "Murton Park houses the Yorkshire Museum of Farming",
      "York Livestock Centre is in Murton",
      "The A166 runs south-east from Murton towards Bridlington",
      "St James' Church is linked with St Thomas', Osbaldwick"
    ]
  },
  "/driving-lessons-layerthorpe-york/": {
    "area": "Layerthorpe",
    "guide": "Layerthorpe sits just outside the city walls, where the old village became an industrial district, and it is the most urban of these areas. Layerthorpe Bridge carries the road over the River Foss and meets Peasholme Green and Foss Islands Road, which forms part of the inner ring road. Expect multi-lane junctions, signals, buses and delivery vehicles, so lane discipline and early planning matter. Foss Islands Road was laid out in 1854, and the Grade II listed chimney there is an easy landmark. The Layerthorpe road itself heads out towards Heworth, a useful step up from quiet estates.",
    "facts": [
      "Foss Islands Road is part of York's inner ring road",
      "Layerthorpe Bridge crosses the River Foss",
      "Hallfield Road links through to the A1079",
      "Foss Islands chimney is Grade II listed"
    ]
  },
  "/driving-lessons-fulford-york/": {
    "area": "Fulford",
    "guide": "Fulford's main street is the A19, so lessons here start with real traffic rather than quiet cul-de-sacs. Pedestrians cross freely near the shops, pubs and schools, including Fulford School and St Oswald's Primary, so mirror checks and steady speed control matter. Imphal Barracks and the Millennium Bridge approach add turning vehicles and walkers. The A64 is close enough to practise joining and leaving a faster road from a slip road.",
    "facts": [
      "Fulford's main street is the A19",
      "York Designer Outlet is near the A19 and A64 junction",
      "Imphal Barracks is in Fulford",
      "Fulford School and St Oswald's Primary are local schools"
    ]
  },
  "/driving-lessons-bishopthorpe-york/": {
    "area": "Bishopthorpe",
    "guide": "Bishopthorpe is a village about three miles south of York, and its roads suit a calm, methodical start. Bishopthorpe Road is the bus route towards the city, while Main Street, Acaster Lane and Appleton Road bring plenty of parked cars, narrow sections and give-way decisions. Three primary schools, on Acaster Road, Appleton Road and Sim Balk Lane, mean school-run traffic and pupils on foot at set times, so plan lessons accordingly. The Archbishop's Palace and the conservation area around it keep the centre compact. The village sits close to the River Ouse, and low-lying ings beside it have flooded in the past, so check road conditions after heavy rain.",
    "facts": [
      "Bishopthorpe lies about three miles south of York",
      "Bishopthorpe Road is a bus route into York",
      "Archbishop's Palace is a Grade I listed building",
      "Three primary or infant schools serve the village",
      "Main Street and the Palace area are a conservation area"
    ]
  },
  "/driving-lessons-copmanthorpe-york/": {
    "area": "Copmanthorpe",
    "guide": "Copmanthorpe is a commuter village roughly four miles south-west of York, and the thing that sets it apart for learners is the A64. The Leeds to Scarborough road bypasses the village, and its grade-separated junction with the A1237 York Outer Ring Road gives you a proper chance to practise slip roads, lane discipline and checking your mirrors at higher speeds. In the village itself, Main Street runs past a small shopping precinct, the Royal Oak and the Recreation Centre, while Church Street and Low Green form a conservation area where roads feel tighter. Hallcroft Lane and Top Lane follow the old route through the village.",
    "facts": [
      "The A64 bypasses Copmanthorpe, built in 1975 to 1976",
      "A64 meets the A1237 outer ring road at a grade-separated junction",
      "Copmanthorpe is about four miles south-west of York centre",
      "Main Street, Church Street and Low Green form a conservation area",
      "Copmanthorpe Primary School serves the village"
    ]
  },
  "/driving-lessons-heslington-york/": {
    "area": "Heslington",
    "guide": "Heslington mixes a village core with a university town, so a lesson here is rarely dull. Main Street, with its post office, bakery and two pubs, the Deramore Arms and the Charles XII, is a conservation area, which means parked cars and tight passing places. Campus West, including Heslington Hall, is in the village, while Campus East opened in 2009 on the village's east side. Students on foot, bikes and buses appear without warning, especially at term-time peaks, so scan constantly and expect people to step out. Heslington Lane runs towards Fulford, giving a route out to the A19. The A64 is nearby for dual carriageway practice.",
    "facts": [
      "University of York Campus West and Heslington Hall are in Heslington",
      "Campus East opened in October 2009",
      "Heslington became a conservation area in 1969",
      "Main Street has two pubs, a bakery and a post office",
      "Heslington Lane runs towards Fulford"
    ]
  },
  "/driving-lessons-badger-hill-york/": {
    "area": "Badger Hill",
    "guide": "Badger Hill is a 1960s housing estate of detached and semi-detached homes with front gardens and driveways, which gives learners a classic residential workout: parked cars, junctions with limited sight lines and plenty of mirror practice. The City of York Council describes it as bounded by Hull Road, Windmill Lane and Field Lane. Hull Road is the A1079, the main route to the city centre, with bus stops including Windmill Lane, so you will meet buses pulling out and cyclists, many of them students. Campus East of the University of York is close by. Heading the other way, the A64 ring road is the route out of the city, and it is useful for building up to faster roads.",
    "facts": [
      "Badger Hill estate was built in the early 1960s",
      "Estate sits between Hull Road, Windmill Lane and Field Lane",
      "Hull Road is the A1079 into York",
      "Housing is mostly detached and semi-detached with driveways",
      "University of York Campus East is nearby"
    ]
  },
  "/driving-lessons-acomb-york/": {
    "area": "Acomb",
    "guide": "The A59 Boroughbridge Road and the B1224 (Wetherby Road, The Green, York Road and Acomb Road) are the main routes, and you will soon learn to read busy traffic on them. Around Front Street and Acomb Road the shopping area means parked cars, pedestrians stepping out and buses pulling in, which is good practice for hazard awareness. Then you can drop into quiet estate streets such as Beckfield Lane, Cornlands Road and Gale Lane to work on junctions and parking. Acomb's western edge runs close to the A1237 Outer Ring Road, a useful roundabout-heavy route for building confidence.",
    "facts": [
      "A59 Boroughbridge Road and B1224 run through Acomb",
      "Shopping centres on Front Street and Acomb Road",
      "Western edge runs close to the A1237 Outer Ring Road",
      "Acomb had 22,215 residents at the 2011 census"
    ]
  },
  "/driving-lessons-holgate-york/": {
    "area": "Holgate",
    "guide": "Holgate sits about a mile west of Micklegate Bar, which makes it a handy bridge between suburban and city driving. Lessons here mix older terraced streets, where parked cars narrow the road and you must judge gaps and give way carefully, with busier approaches into the centre. The railway shapes the area: the old York Carriage Works site is now partly a Network Rail depot, and the National Railway Museum is close by, so watch for visitors and pedestrians near it. The restored 1770 windmill and West Bank Park are useful landmarks when you are learning your way around.",
    "facts": [
      "Holgate is about one mile west of Micklegate Bar",
      "National Railway Museum is in the Holgate area",
      "Restored windmill dates from 1770",
      "Part of the old Carriage Works is a Network Rail depot"
    ]
  },
  "/driving-lessons-foxwood-york/": {
    "area": "Foxwood",
    "guide": "Foxwood is a residential estate on York's western side, and Foxwood Lane is its main spine. It suits early lessons well: wide estate roads, parked cars and side turnings let you practise moving off, mirror checks and emerging at junctions before tackling anything faster. Nearby Gale Lane and Askham Lane are among the other roads you will meet, and local shops, schools and a community centre keep the area lively around school times. Once your control is solid, you can move on to larger roundabouts nearer the outer ring road.",
    "facts": [
      "Gale Lane, Moor Lane and Foxwood Lane are historic roads nearby",
      "Foxwood has a community centre"
    ]
  },
  "/driving-lessons-dringhouses-york/": {
    "area": "Dringhouses",
    "guide": "Dringhouses follows Tadcaster Road, an 1745 turnpike that was once part of the old A64 to Leeds, so expect a long, fairly busy road in and out of York. The Knavesmire and York Racecourse lie to the east, giving you open views and, on race days, extra traffic to plan around. The A64 and Askham Bog bound the south, and the Askham Bar Park and Ride is here, so buses and drivers entering and leaving the site are part of your routine. The East Coast Main Line cuts through the middle, and the large Tesco, hotels and library add busy exits to watch. Goddards House and Garden, now National Trust, is a handy landmark.",
    "facts": [
      "Tadcaster Road follows an 1745 turnpike, once part of old A64",
      "Askham Bar Park and Ride serves Dringhouses",
      "Knavesmire and York Racecourse bound the east",
      "East Coast Main Line runs through the centre"
    ]
  },
  "/driving-lessons-woodthorpe-york/": {
    "area": "Woodthorpe",
    "guide": "Woodthorpe is a family suburb just south-west of the city centre, with Dringhouses and Foxwood as neighbours. Expect calm residential streets where Woodthorpe Primary School generates school-run traffic, so lessons here teach patience, careful speed choice and awareness of children. Historic routes such as Moor Lane, Gale Lane and Foxwood Lane link it to the wider area, and Tedder Road forms part of its boundary. The outer ring road and the city centre are both easy to reach, so you can move from quiet streets to larger junctions within minutes. Askham Bar Park and Ride is close by.",
    "facts": [
      "Woodthorpe Primary School serves the area",
      "Moor Lane, Gale Lane and Foxwood Lane are historic roads",
      "Askham Bar Park and Ride is close by"
    ]
  },
  "/driving-lessons-york-city-centre/": {
    "area": "York City Centre",
    "guide": "City centre driving in York is about patience and planning. The inner ring road, the A1036, loops around the walls. It takes in Foss Islands Road, Gillygate, Lendal Bridge and Leeman Road, with Micklegate Bar, the station and the Lendal gyratory among its junctions. Gillygate runs from Bootham towards Lord Mayor's Walk and carries heavy traffic past independent shops, so expect stop-start queues and pedestrians crossing. Lendal Bridge is your river crossing near the station, where lane choice matters. The medieval streets inside the walls are narrow and busy with pedestrians and cyclists, so give them space.",
    "facts": [
      "A1036 is the inner ring road",
      "Foss Islands Road is part of the A1036",
      "Gillygate is part of the inner ring road",
      "Lendal Bridge carries the A1036 towards Leeman Road"
    ]
  }
};
