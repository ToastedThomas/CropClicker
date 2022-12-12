var crops = JSON.parse(localStorage.getItem("savedCrops")) || 0;
var buildingCostInc = 1.15;
var helpHandUpI = JSON.parse(localStorage.getItem("handUp1")) || 1;
var helpHandUpII = JSON.parse(localStorage.getItem('handUp2')) || 1;
var helpHandUpIII = JSON.parse(localStorage.getItem('handUp3')) || 1;
var helpHandUpIV = JSON.parse(localStorage.getItem('handUp4')) || 1;
var helpHandUpV = JSON.parse(localStorage.getItem('handUp5')) || 1;
var helpHandUpVI = JSON.parse(localStorage.getItem('handUp6')) || 1;
var helpHandUpVII = JSON.parse(localStorage.getItem('handUp7')) || 1;
var helpHandUpVIII = JSON.parse(localStorage.getItem('handUp8')) || 1;
var helpHandUpIX = JSON.parse(localStorage.getItem('handUp9')) || 1;
var helpHandUpX = JSON.parse(localStorage.getItem('handUp10')) || 1;
var helpHandUpXI = JSON.parse(localStorage.getItem('handUp11')) || 1;
var clickUp1 = JSON.parse(localStorage.getItem('clickUp1')) || 0;
var clickUp2 = JSON.parse(localStorage.getItem('clickUp2')) || 0;
var clickUp3 = JSON.parse(localStorage.getItem('clickUp3')) || 0;
var clickUp4 = JSON.parse(localStorage.getItem('clickUp4')) || 0;
var clickUp5 = JSON.parse(localStorage.getItem('clickUp5')) || 0;
var farmerJoeUpI = JSON.parse(localStorage.getItem("joeUp1")) || 1;
var farmerJoeUpII = JSON.parse(localStorage.getItem('joeUp2')) || 1;
var farmerJoeUpIII = JSON.parse(localStorage.getItem('joeUp3')) || 1;
var farmerJoeUpIV = JSON.parse(localStorage.getItem('joeUp4')) || 1;
var farmerJoeUpV = JSON.parse(localStorage.getItem('joeUp5')) || 1;
var fieldUpI = JSON.parse(localStorage.getItem('fieldUp1')) || 1;
var fieldUpII = JSON.parse(localStorage.getItem('fieldUp2')) || 1;
var fieldUpIII = JSON.parse(localStorage.getItem('fieldUp3')) || 1;
var fieldUpIV = JSON.parse(localStorage.getItem('fieldUp4')) || 1;
var fieldUpV = JSON.parse(localStorage.getItem('fieldUp5')) || 1;
var harvesterUpI = JSON.parse(localStorage.getItem('harvesterUp1')) || 1;
var harvesterUpII = JSON.parse(localStorage.getItem('harvesterUp2')) || 1;
var harvesterUpIII = JSON.parse(localStorage.getItem('harvesterUp3')) || 1;
var harvesterUpIV = JSON.parse(localStorage.getItem('harvesterUp4')) || 1;
var harvesterUpV = JSON.parse(localStorage.getItem('harvesterUp5')) || 1;
var greenhouseUpI = JSON.parse(localStorage.getItem('greenhouseUp1')) || 1;
var greenhouseUpII = JSON.parse(localStorage.getItem('greenhouseUp2')) || 1;
var greenhouseUpIII = JSON.parse(localStorage.getItem('greenhouseUp3')) || 1;
var greenhouseUpIV = JSON.parse(localStorage.getItem('greenhouseUp4')) || 1;
var greenhouseUpV = JSON.parse(localStorage.getItem('greenhouseUp5')) || 1;
var skyscraperUpI = JSON.parse(localStorage.getItem('skyscraperUp1')) || 1;
var skyscraperUpII = JSON.parse(localStorage.getItem('skyscraperUp2')) || 1;
var skyscraperUpIII = JSON.parse(localStorage.getItem('skyscraperUp3')) || 1;
var skyscraperUpIV = JSON.parse(localStorage.getItem('skyscraperUp4')) || 1;
var skyscraperUpV = JSON.parse(localStorage.getItem('skyscraperUp5')) || 1;
var bunkerUpI = JSON.parse(localStorage.getItem('bunkerUp1')) || 1;
var bunkerUpII = JSON.parse(localStorage.getItem('bunkerUp2')) || 1;
var bunkerUpIII = JSON.parse(localStorage.getItem('bunkerUp3')) || 1;
var bunkerUpIV = JSON.parse(localStorage.getItem('bunkerUp4')) || 1;
var bunkerUpV = JSON.parse(localStorage.getItem('bunkerUp5')) || 1;
var replicatorUpI = JSON.parse(localStorage.getItem('replicator1')) || 1;
var replicatorUpII = JSON.parse(localStorage.getItem('replicator2')) || 1;
var replicatorUpIII = JSON.parse(localStorage.getItem('replicator3')) || 1;
var replicatorUpIV = JSON.parse(localStorage.getItem('replicator4')) || 1;
var replicatorUpV = JSON.parse(localStorage.getItem('replicator5')) || 1;
var planetUpI = JSON.parse(localStorage.getItem('planetUp1')) || 1;
var planetUpII = JSON.parse(localStorage.getItem('planetUp2')) || 1;
var planetUpIII = JSON.parse(localStorage.getItem('planetUp3')) || 1;
var planetUpIV = JSON.parse(localStorage.getItem('planetUp4')) || 1;
var planetUpV = JSON.parse(localStorage.getItem('planetUp5')) || 1;
var transmutatorUpI = JSON.parse(localStorage.getItem('transmutator1')) || 1;
var transmutatorUpII = JSON.parse(localStorage.getItem('transmutator2')) || 1;
var transmutatorUpIII = JSON.parse(localStorage.getItem('transmutator3')) || 1;
var transmutatorUpIV = JSON.parse(localStorage.getItem('transmutator4')) || 1;
var transmutatorUpV = JSON.parse(localStorage.getItem('transmutator5')) || 1;
var carrotUp = JSON.parse(localStorage.getItem('carrotUp')) || 0;
var potato01Up = JSON.parse(localStorage.getItem('potato01Up')) || 0;
var turnipUp = JSON.parse(localStorage.getItem('turnipUp')) || 0;
var onionUp = JSON.parse(localStorage.getItem('onionUp')) || 0;
var peaUp = JSON.parse(localStorage.getItem('peaUp')) || 0;
var soybeanUp = JSON.parse(localStorage.getItem('soybeanUp')) || 0;
var tomato01Up = JSON.parse(localStorage.getItem('tomato01Up')) || 0;
var tomato02Up = JSON.parse(localStorage.getItem('tomato02Up')) || 0;
var lettuceUp = JSON.parse(localStorage.getItem('lettuceUp')) || 0;
var wheat01Up = JSON.parse(localStorage.getItem('wheat01Up')) || 0;
var wheat02Up = JSON.parse(localStorage.getItem('wheat02Up')) || 0;
var milletUp = JSON.parse(localStorage.getItem('milletUp')) || 0;
var cucumberUp = JSON.parse(localStorage.getItem('cucumberUp')) || 0;
var tomato03Up = JSON.parse(localStorage.getItem('tomato03Up')) || 0;
var pepperUp = JSON.parse(localStorage.getItem('pepperUp')) || 0;
var eggplantUp = JSON.parse(localStorage.getItem('eggplantUp')) || 0;
var sugarcaneUp = JSON.parse(localStorage.getItem('sugarcaneUp')) || 0;
var cornUp = JSON.parse(localStorage.getItem('cornUp')) || 0;
var garlicUp = JSON.parse(localStorage.getItem('garlicUp')) || 0;
var beetUp = JSON.parse(localStorage.getItem('beetUp')) || 0;
var potato02Up = JSON.parse(localStorage.getItem('potato02Up')) || 0;
var riceUp = JSON.parse(localStorage.getItem('riceUp')) || 0;
var sunflowerUp = JSON.parse(localStorage.getItem('sunflowerUp')) || 0;
var cassavaUp = JSON.parse(localStorage.getItem('cassavaUp')) || 0;
var pumpkinUp = JSON.parse(localStorage.getItem('pumpkinUp')) || 0;

var numHelpHands = JSON.parse(localStorage.getItem("savedHand")) || 0;
var costHelpHand = Math.round(15 * buildingCostInc ** numHelpHands);
var numFarmerJoe = JSON.parse(localStorage.getItem("savedJoe")) || 0;
var costFarmerJoe = Math.round(250 * buildingCostInc ** numFarmerJoe);
var numField = JSON.parse(localStorage.getItem("savedField")) || 0;
var costField = Math.round(2500 * buildingCostInc ** numField);
var numHarvester = JSON.parse(localStorage.getItem("savedHarvester")) || 0;
var costHarvester = Math.round(25000 * buildingCostInc ** numHarvester);
var numGreenhouse = JSON.parse(localStorage.getItem("savedGreenhouse")) || 0;
var costGreenhouse = Math.round(250000 * buildingCostInc ** numGreenhouse);
var numSkyscraper = JSON.parse(localStorage.getItem("savedSkyscraper")) || 0;
var costSkyscraper = Math.round(2500000 * buildingCostInc ** numSkyscraper);
var numBunkers = JSON.parse(localStorage.getItem("savedBunker")) || 0;
var costBunkers = Math.round(25000000 * buildingCostInc ** numBunkers);
var numReplicator = JSON.parse(localStorage.getItem("savedReplicator")) || 0;
var costReplicator = Math.round(250000000 * buildingCostInc ** numReplicator);
var numPlanet = JSON.parse(localStorage.getItem("savedPlanet")) || 0;
var costPlanet = Math.round(25000000000 * buildingCostInc ** numPlanet);
var numTransmutator = JSON.parse(localStorage.getItem("savedTransmutator")) || 0;
var costTransmutator = Math.round(250000000000 * buildingCostInc ** numTransmutator);

var clickvalue = 1; 

var prodHelpHand = .1 * helpHandUpI * helpHandUpII * helpHandUpIII * helpHandUpIV * helpHandUpV * helpHandUpVI * helpHandUpVII * helpHandUpVIII * helpHandUpIX * helpHandUpX * helpHandUpXI;
var prodFarmerJoe = 2 * farmerJoeUpI * farmerJoeUpII * farmerJoeUpIII * farmerJoeUpIV * farmerJoeUpV;
var prodField = 10 * fieldUpI * fieldUpII * fieldUpIII * fieldUpIV * fieldUpV;
var prodHarvester = 50 * harvesterUpI * harvesterUpII * harvesterUpIII * harvesterUpIV * harvesterUpV;
var prodGreenhouse = 250 * greenhouseUpI * greenhouseUpII * greenhouseUpIII * greenhouseUpIV * greenhouseUpV;
var prodSkyscraper = 1250 * skyscraperUpI * skyscraperUpII * skyscraperUpIII * skyscraperUpIV * skyscraperUpV;
var prodBunker = 6250 * bunkerUpI * bunkerUpII * bunkerUpIII * bunkerUpIV * bunkerUpV;
var prodReplicator = 31250 * replicatorUpI * replicatorUpII * replicatorUpIII * replicatorUpIV * replicatorUpV;
var prodPlanet = 156250 * planetUpI * planetUpII * planetUpIII * planetUpIV * planetUpV;
var prodTransmutator = 781250 * transmutatorUpI * transmutatorUpII * transmutatorUpIII * transmutatorUpIV * transmutatorUpV;

var bonusMuliplier = (carrotUp + potato01Up + turnipUp + onionUp + peaUp + soybeanUp + tomato01Up + tomato02Up + lettuceUp + wheat01Up + wheat02Up + milletUp + cucumberUp + tomato03Up + pepperUp + eggplantUp + sugarcaneUp + cornUp + garlicUp + beetUp + potato02Up + riceUp + sunflowerUp + cassavaUp + pumpkinUp);
var cropsPerSecBase = ((numHelpHands * prodHelpHand) + (prodFarmerJoe * numFarmerJoe) + (prodField * numField) + (prodHarvester * numHarvester) + (prodGreenhouse * numGreenhouse) + (prodSkyscraper * numSkyscraper) + (prodBunker * numBunkers) + (prodReplicator * numReplicator) + (prodPlanet * numPlanet) + (prodTransmutator * numTransmutator));
var clickvalue = 1 + (clickUp1 * (.01 * cropsPerSecBase)) + (clickUp2 * (.01 * cropsPerSecBase)) + (clickUp3 * (.01 * cropsPerSecBase)) + (clickUp4 * (.01 * cropsPerSecBase)) + (clickUp5 * (.01 * cropsPerSecBase));
var cropsPerSecWBonus = cropsPerSecBase * ((bonusMuliplier / 100) + 1);

var unlockedJoe = JSON.parse(localStorage.getItem('unlockedJoe')) || false;
var unlockedField = JSON.parse(localStorage.getItem('unlockedField')) || false;
var unlockedHarvester = JSON.parse(localStorage.getItem('unlockedHarvester')) || false;
var unlockedGreenhouse = JSON.parse(localStorage.getItem('unlockedGreenhouse')) || false;
var unlockedSkyscraper = JSON.parse(localStorage.getItem('unlockedSkyscraper')) || false;
var unlockedBunker = JSON.parse(localStorage.getItem('unlockedBunker')) || false;
var unlockedReplicator = JSON.parse(localStorage.getItem('unlockedReplicator')) || false;
var unlockedPlanet = JSON.parse(localStorage.getItem('unlockedPlanet')) || false;
var unlockedTransmutator = JSON.parse(localStorage.getItem('unlockedTransmutator')) || false;

const bigCrop = document.getElementById("bigcrop");//used for button hover events
const helphanddesc = document.getElementById("helphandbtn");
const farmerjoedesc = document.getElementById("farmerjoebtn");
const fielddesc = document.getElementById("fieldbtn");
const harvesterdesc = document.getElementById("harvesterbtn");
const greenhousedesc = document.getElementById("greenhousebtn");
const skyscraperdesc = document.getElementById("skyscraperbtn");
const bunkerdesc = document.getElementById("bunkerbtn");
const replicatordesc = document.getElementById("replicatorbtn");
const planetdesc = document.getElementById("planetbtn");
const transmutatordesc = document.getElementById("transmutatorbtn");
const upgradeTitle = ['Wooden hands', 
'Stone hands', 
'Tin hands', 
'Copper hands', 
'Iron hands', 
'Steel hands', 
'Cobalt hands', 
'Titanium hands', 
'Iridium hands', 
'Tungsten hands', 
'Diamond hands', 
'Functional clicking', 
'Helpful clicks', 
'Powerful clicking', 
'Bountiful clicks', 
'Vigorous clicking', 
'Morning joe', 
'Hearing aids', 
'Funny pages', 
'Special old gloves', 
'Early bird special', 
'Level ground', 
'Larger fields', 
'Fertilized land', 
'All natural pesticide', 
'Growth regiment', 
'Wide headers', 
'More horsepower', 
'Self-driving combines', 
'Comically wide headers', 
'Electric motors', 
'Automated sprinklers', 
'Mineral water', 
'Geo-thermal heating', 
'Robot security', 
'UV magnifying glass', 
'Better lighting', 
'Company work retreats', 
'Taller buildings', 
'Automated call center', 
'To the clouds', 
'Ventilation shafts', 
'Deeper levels', 
'Faster conveyors', 
'Booby-trapped entrance', 
'Trans-continental tunnel', 
'Radiation removal', 
'Overclocked CPU', 
'Technological advancements', 
'Liquid nitrogen cooling', 
'Energy efficient lasers', 
'Orbiting harvesters', 
'Interstellar diplomats', 
'Complete weather control', 
'Rainforest farms', 
'Bean rain', 
'Quality heat shields', 
'Quicker absorption', 
'Prevent star collapse', 
'Astroid blaster', 
'Hotfix 1',
'Carrot', 
'Potato', 
'Turnip', 
'Onion', 
'Pea', 
'Soybean', 
'Alicante tomato', 
'Roma tomato', 
'Iceberg lettuce', 
'Bread wheat', 
'Durum wheat', 
'Pearl millet', 
'Cucumber', 
'Jubilee tomato', 
'Bell pepper', 
'Eggplant', 
'Sugarcane', 
'Sweet corn', 
'Garlic', 
'Beet', 
'Sweet potato', 
'Rice', 
'Sunflower', 
'Cassava', 
'Pumpkin', ]
const upgradeCost = [100, 
    500,
    3000,
    100000,
    100000000,
    200000000000,
    250000000000000,
    100000000000000000,
    1000000000000000000,
    100000000000000000000,
    1000000000000000000000,
    1000,
    15000,
    150000,
    1000000,
    25000000,
    5000,
    15000,
    75000,
    3000000,
    3500000000,
    60000,
    110000,
    750000,
    2750000,
    3000000000,
    500000,
    1000000,
    7250000,
    250000000,
    275000000000,
    5000000,
    10000000,
    75000000,
    2750000000,
    3000000000000,
    50000000,
    100000000,
    800000000,
    27500000000,
    30000000000000,
    575000000,
    1000000000,
    8250000000,
    275000000000,
    300000000000000,
    5000000000,
    12000000000,
    80000000000,
    2725000000000,
    3500000000000000,
    500000000000,
    1000000000000,
    8250000000000,
    275000000000000,
    300000000000000000,
    5000000000000,
    10000000000000,
    75000000000000,
    2500000000000000,
    3000000000000000000,
    100000,
    250000,
    3000000,
    5000000,
    250000,
    1000000,
    100000,
    7500000,
    1000000,
    100000,
    2500000,
    10000000,
    5000000,
    2000000000,
    255000000,
    150000000,
    400000000,
    5000000,
    1000000000,
    50000000,
    600000000,
    4000000000,
    75000000000,
    25000000000,
    10000000000, ]
const upgradeDesc = ['Helping hand production is doubled!',
'Clicks gain an additional 1% of cps!', 
'Farmer Joe production is doubled!',
'Magic field production is doubled!', 
'Combine production is doubled!', 
'Greenhouse production is doubled!', 
'Skyscraper production is doubled!', 
'Bunker production is doubled!', 
'Replicator production is doubled!',
'Planet production is doubled!', 
'Transmutator production is doubled!', 
'Increases overall cps by 1%', 
'Increases overall cps by 2%', 
'Increases overall cps by 5%']
const upgradeIcon = [document.getElementById('helphandI'), 
document.getElementById('helphandII'), 
document.getElementById('helphandIII'), 
document.getElementById('helphandIV'), 
document.getElementById('helphandV'), 
document.getElementById('helphandVI'), 
document.getElementById('helphandVII'), 
document.getElementById('helphandVIII'), 
document.getElementById('helphandIX'), 
document.getElementById('helphandX'), 
document.getElementById('helphandXI'), //10
document.getElementById('clicking1'), 
document.getElementById('clicking2'), 
document.getElementById('clicking3'), 
document.getElementById('clicking4'), 
document.getElementById('clicking5'), 
document.getElementById('farmerjoeI'), 
document.getElementById('farmerjoeII'), 
document.getElementById('farmerjoeIII'), 
document.getElementById('farmerjoeIV'), 
document.getElementById('farmerjoeV'), //20
document.getElementById('fieldI'), 
document.getElementById('fieldII'), 
document.getElementById('fieldIII'), 
document.getElementById('fieldIV'), 
document.getElementById('fieldV'), 
document.getElementById('harvesterI'), 
document.getElementById('harvesterII'), 
document.getElementById('harvesterIII'), 
document.getElementById('harvesterIV'), 
document.getElementById('harvesterV'), //30
document.getElementById('greenhouseI'), 
document.getElementById('greenhouseII'), 
document.getElementById('greenhouseIII'), 
document.getElementById('greenhouseIV'), 
document.getElementById('greenhouseV'), 
document.getElementById('skyscraperI'), 
document.getElementById('skyscraperII'), 
document.getElementById('skyscraperIII'), 
document.getElementById('skyscraperIV'), 
document.getElementById('skyscraperV'), //40
document.getElementById('bunkerI'), 
document.getElementById('bunkerII'), 
document.getElementById('bunkerIII'), 
document.getElementById('bunkerIV'), 
document.getElementById('bunkerV'), 
document.getElementById('replicatorI'), 
document.getElementById('replicatorII'), 
document.getElementById('replicatorIII'), 
document.getElementById('replicatorIV'), 
document.getElementById('replicatorV'), //50
document.getElementById('planetI'), 
document.getElementById('planetII'), 
document.getElementById('planetIII'), 
document.getElementById('planetIV'), 
document.getElementById('planetV'), 
document.getElementById('transmutatorI'), 
document.getElementById('transmutatorII'), 
document.getElementById('transmutatorIII'), 
document.getElementById('transmutatorIV'), 
document.getElementById('transmutatorV'), //60
document.getElementById('carrot'), 
document.getElementById('potato01'), 
document.getElementById('turnip'), 
document.getElementById('onion'), 
document.getElementById('pea'), 
document.getElementById('soybean'), 
document.getElementById('tomato01'), 
document.getElementById('tomato02'), 
document.getElementById('lettuce'), 
document.getElementById('wheat01'), //70
document.getElementById('wheat02'), 
document.getElementById('millet'), 
document.getElementById('cucumber'), 
document.getElementById('tomato03'), 
document.getElementById('pepper'), 
document.getElementById('eggplant'), 
document.getElementById('sugarcane'), 
document.getElementById('corn'), 
document.getElementById('garlic'), 
document.getElementById('beet'), //80
document.getElementById('potato02'), 
document.getElementById('rice'), 
document.getElementById('sunflower'), 
document.getElementById('cassava'), 
document.getElementById('pumpkin'), ];
const achievementIcon = [document.getElementById("achievement01"), 
document.getElementById("achievement02"), 
document.getElementById("achievement03"), 
document.getElementById("achievement04"), 
document.getElementById("achievement05"), 
document.getElementById("achievement06"), 
document.getElementById("achievement07"), 
document.getElementById("achievement08"), 
document.getElementById("achievement09"), 
document.getElementById("achievement10"), 
document.getElementById("achievement11"), 
document.getElementById("achievement12"), 
document.getElementById("achievement13"), 
document.getElementById("achievement14"), 
document.getElementById("achievement15"), 
document.getElementById("achievement16"), 
document.getElementById("achievement17"), 
document.getElementById("achievement18"), 
document.getElementById("achievement19"), 
document.getElementById("achievement20"), 
document.getElementById("achievement21"), 
document.getElementById("achievement22"), 
document.getElementById("achievement23"), 
document.getElementById("achievement24"), 
document.getElementById("achievement25"), 
document.getElementById("achievement26"), 
document.getElementById("achievement27"), 
document.getElementById("achievement28"), 
document.getElementById("achievement29"), 
document.getElementById("achievement30"), 
document.getElementById("achievement31"), 
document.getElementById("achievement32"), 
document.getElementById("achievement33"), 
document.getElementById("achievement34"), 
document.getElementById("achievement35"), 
document.getElementById("achievement36"), 
document.getElementById("achievement37"), 
document.getElementById("achievement38"), 
document.getElementById("achievement39"), 
document.getElementById("achievement40"), 
document.getElementById("achievement41"), 
document.getElementById("achievement42"), 
document.getElementById("achievement43"), 
document.getElementById("achievement44"), 
document.getElementById("achievement45"), 
document.getElementById("achievement46"), 
document.getElementById("achievement47"), 
document.getElementById("achievement48"), 
document.getElementById("achievement49"), 
document.getElementById("achievement50"), 
document.getElementById("achievement51"), 
document.getElementById("achievement52"), 
document.getElementById("achievement53"), 
document.getElementById("achievement54"), 
document.getElementById("achievement55"), 
document.getElementById("achievement56"), 
document.getElementById("achievement57"), 
document.getElementById("achievement58"), 
document.getElementById("achievement59"), 
document.getElementById("achievement60"), 
document.getElementById("achievement61"), 
document.getElementById("achievement62"), 
document.getElementById("achievement63"), 
document.getElementById("achievement64"), ]
const nightModeBtn = document.getElementById('nightMode');
const soundSettingBtn = document.getElementById('sounds');
const commaForm = new Intl.NumberFormat('en-US', {notation: "compact", compactDisplay: "long", minimumFractionDigits: 0, maximumFractionDigits: 3,});

var nightMode = JSON.parse(localStorage.getItem('nightMode')) || 0;
var soundSetting = JSON.parse(localStorage.getItem('soundSetting')) || 0;

var achievement01 = JSON.parse(localStorage.getItem("achievement01")) || 0;//achievement variables
var achievement02 = JSON.parse(localStorage.getItem('achievement02')) || 0;
var achievement03 = JSON.parse(localStorage.getItem('achievement03')) || 0;
var achievement04 = JSON.parse(localStorage.getItem('achievement04')) || 0;
var achievement05 = JSON.parse(localStorage.getItem('achievement05')) || 0;
var achievement06 = JSON.parse(localStorage.getItem('achievement06')) || 0;
var achievement07 = JSON.parse(localStorage.getItem('achievement07')) || 0;
var achievement08 = JSON.parse(localStorage.getItem('achievement08')) || 0;
var achievement09 = JSON.parse(localStorage.getItem('achievement09')) || 0;
var achievement10 = JSON.parse(localStorage.getItem('achievement10')) || 0;
var achievement11 = JSON.parse(localStorage.getItem('achievement11')) || 0;
var achievement12 = JSON.parse(localStorage.getItem('achievement12')) || 0;
var achievement13 = JSON.parse(localStorage.getItem('achievement13')) || 0;
var achievement14 = JSON.parse(localStorage.getItem('achievement14')) || 0;
var achievement15 = JSON.parse(localStorage.getItem('achievement15')) || 0;
var achievement16 = JSON.parse(localStorage.getItem('achievement16')) || 0;
var achievement17 = JSON.parse(localStorage.getItem('achievement17')) || 0;
var achievement18 = JSON.parse(localStorage.getItem('achievement18')) || 0;
var achievement19 = JSON.parse(localStorage.getItem('achievement19')) || 0;
var achievement20 = JSON.parse(localStorage.getItem('achievement20')) || 0;
var achievement21 = JSON.parse(localStorage.getItem("achievement21")) || 0;
var achievement22 = JSON.parse(localStorage.getItem('achievement22')) || 0;
var achievement23 = JSON.parse(localStorage.getItem('achievement23')) || 0;
var achievement24 = JSON.parse(localStorage.getItem('achievement24')) || 0;
var achievement25 = JSON.parse(localStorage.getItem('achievement25')) || 0;
var achievement26 = JSON.parse(localStorage.getItem('achievement26')) || 0;
var achievement27 = JSON.parse(localStorage.getItem('achievement27')) || 0;
var achievement28 = JSON.parse(localStorage.getItem('achievement28')) || 0;
var achievement29 = JSON.parse(localStorage.getItem('achievement29')) || 0;
var achievement30 = JSON.parse(localStorage.getItem('achievement30')) || 0;
var achievement31 = JSON.parse(localStorage.getItem('achievement31')) || 0;
var achievement32 = JSON.parse(localStorage.getItem('achievement32')) || 0;
var achievement33 = JSON.parse(localStorage.getItem('achievement33')) || 0;
var achievement34 = JSON.parse(localStorage.getItem('achievement34')) || 0;
var achievement35 = JSON.parse(localStorage.getItem('achievement35')) || 0;
var achievement36 = JSON.parse(localStorage.getItem('achievement36')) || 0;
var achievement37 = JSON.parse(localStorage.getItem('achievement37')) || 0;
var achievement38 = JSON.parse(localStorage.getItem('achievement38')) || 0;
var achievement39 = JSON.parse(localStorage.getItem('achievement39')) || 0;
var achievement40 = JSON.parse(localStorage.getItem('achievement40')) || 0;
var achievement41 = JSON.parse(localStorage.getItem('achievement41')) || 0;
var achievement42 = JSON.parse(localStorage.getItem('achievement42')) || 0;
var achievement43 = JSON.parse(localStorage.getItem('achievement43')) || 0;
var achievement44 = JSON.parse(localStorage.getItem('achievement44')) || 0;
var achievement45 = JSON.parse(localStorage.getItem('achievement45')) || 0;
var achievement46 = JSON.parse(localStorage.getItem('achievement46')) || 0;
var achievement47 = JSON.parse(localStorage.getItem('achievement47')) || 0;
var achievement48 = JSON.parse(localStorage.getItem('achievement48')) || 0;
var achievement49 = JSON.parse(localStorage.getItem('achievement49')) || 0;
var achievement50 = JSON.parse(localStorage.getItem('achievement50')) || 0;
var achievement51 = JSON.parse(localStorage.getItem('achievement51')) || 0;
var achievement52 = JSON.parse(localStorage.getItem('achievement52')) || 0;
var achievement53 = JSON.parse(localStorage.getItem('achievement53')) || 0;
var achievement54 = JSON.parse(localStorage.getItem('achievement54')) || 0;
var achievement55 = JSON.parse(localStorage.getItem('achievement55')) || 0;
var achievement56 = JSON.parse(localStorage.getItem('achievement56')) || 0;
var achievement57 = JSON.parse(localStorage.getItem('achievement57')) || 0;
var achievement58 = JSON.parse(localStorage.getItem('achievement58')) || 0;
var achievement59 = JSON.parse(localStorage.getItem('achievement59')) || 0;
var achievement60 = JSON.parse(localStorage.getItem('achievement60')) || 0;
var achievement61 = JSON.parse(localStorage.getItem('achievement61')) || 0;
var achievement62 = JSON.parse(localStorage.getItem('achievement62')) || 0;
var achievement63 = JSON.parse(localStorage.getItem('achievement63')) || 0;
var achievement64 = JSON.parse(localStorage.getItem('achievement64')) || 0;

var totalCropTypes = (carrotUp+potato01Up+turnipUp+onionUp+peaUp+soybeanUp+tomato01Up+tomato02Up+lettuceUp+wheat01Up+wheat02Up+(milletUp/2)+(cucumberUp/2)+(tomato03Up/2)+(pepperUp/2)+(eggplantUp/2)+(sugarcaneUp/2)+(cornUp/2)+(garlicUp/2)+(beetUp/2)+(potato02Up/5)+(riceUp/5)+(sunflowerUp/5)+(cassavaUp/5)+(pumpkinUp/5));
var totalClicks = JSON.parse(localStorage.getItem("totalclicks")) || 0;//stats variables
var lifetimeCrops = JSON.parse(localStorage.getItem("totalCropHarvest")) || 0;
var cropsByHand = JSON.parse(localStorage.getItem('cropsByHand')) || 0;
var totalBuildings = (numHelpHands + numFarmerJoe + numField + numHarvester + numGreenhouse + numSkyscraper + numBunkers + numReplicator + numPlanet + numTransmutator);
var totalUpgrades = (helpHandUpI + helpHandUpII + helpHandUpIII + helpHandUpIV + helpHandUpV + helpHandUpVI + helpHandUpVII + helpHandUpVIII + helpHandUpIX + helpHandUpX + helpHandUpXI + clickUp1 + clickUp2 + clickUp3 + clickUp4 + clickUp5 + farmerJoeUpI + farmerJoeUpII + farmerJoeUpIII + farmerJoeUpIV + farmerJoeUpV + fieldUpI + fieldUpII + fieldUpIII + fieldUpIV + fieldUpV + harvesterUpI + harvesterUpII + harvesterUpIII + harvesterUpIV + harvesterUpV + greenhouseUpI + greenhouseUpII + greenhouseUpIII + greenhouseUpIV + greenhouseUpV + skyscraperUpI + skyscraperUpII + skyscraperUpIII + skyscraperUpIV + skyscraperUpV + bunkerUpI + bunkerUpII + bunkerUpIII + bunkerUpIV + bunkerUpV + replicatorUpI + replicatorUpII + replicatorUpIII + replicatorUpIV + replicatorUpV + planetUpI + planetUpII + planetUpIII + planetUpIV + planetUpV + transmutatorUpI + transmutatorUpII + transmutatorUpIII + transmutatorUpIV + transmutatorUpV + totalCropTypes) - 56;
var totalAchievements = (achievement01 + achievement02 + achievement03 + achievement04 + achievement05 + achievement06 + achievement07 + achievement08 + achievement09 + achievement10 + achievement11 + achievement12 + achievement13 + achievement14 + achievement15 + achievement16 + achievement17 + achievement18 + achievement19 + achievement20 + achievement21 + achievement22 + achievement23 + achievement24 + achievement25 + achievement26 + achievement27 + achievement28 + achievement29 + achievement30 + achievement31 + achievement32 + achievement33 + achievement34 + achievement35 + achievement36 + achievement37 + achievement38 + achievement39 + achievement40 + achievement41  + achievement42 + achievement43 + achievement44 + achievement45 + achievement46 + achievement47 + achievement48 + achievement49 + achievement50 + achievement51 + achievement52 +  achievement53 + achievement54 + achievement55 + achievement56 + achievement57 + achievement58 + achievement59 + achievement60 + achievement61 + achievement62 + achievement63 + achievement64) ;
var farmStartDate = new Date();
var editFarmStart = JSON.parse(localStorage.getItem('startDate')) || (farmStartDate.getMonth()+1)+'-'+farmStartDate.getDate()+'-'+farmStartDate.getFullYear();

const clickSound = new Audio('audio/click.mp3');

document.getElementById("score").innerHTML = commaForm.format(crops) + " " + "crops";//these display initial values  when arriving
document.getElementById("cps").innerHTML = commaForm.format(cropsPerSecWBonus) + " " + "cps";
document.getElementById('totalUpgrades1').innerHTML = totalUpgrades;
document.getElementById('totalAchieve').innerHTML = totalAchievements;
document.getElementById("countHelpHand").innerHTML = numHelpHands;
document.getElementById("helpHandCost").innerHTML = commaForm.format(costHelpHand);
document.getElementById("countFarmerJoe").innerHTML = numFarmerJoe;
document.getElementById("farmerJoeCost").innerHTML = commaForm.format(costFarmerJoe);
document.getElementById("countField").innerHTML = numField;
document.getElementById("fieldCost").innerHTML = commaForm.format(costField);
document.getElementById("countHarvester").innerHTML = numHarvester;
document.getElementById("harvesterCost").innerHTML = commaForm.format(costHarvester);
document.getElementById("countGreenhouse").innerHTML = numGreenhouse;
document.getElementById("greenhouseCost").innerHTML = commaForm.format(costGreenhouse);
document.getElementById("countSkyscraper").innerHTML = numSkyscraper;
document.getElementById("skyscraperCost").innerHTML = commaForm.format(costSkyscraper);
document.getElementById("countBunker").innerHTML = numBunkers;
document.getElementById("bunkerCost").innerHTML = commaForm.format(costBunkers);
document.getElementById("countReplicator").innerHTML = numReplicator;
document.getElementById("replicatorCost").innerHTML = commaForm.format(costReplicator);
document.getElementById("countPlanet").innerHTML = numPlanet;
document.getElementById("planetCost").innerHTML = commaForm.format(costPlanet);
document.getElementById("countTransmutator").innerHTML = numTransmutator;
document.getElementById("transmutatorCost").innerHTML = commaForm.format(costTransmutator);
document.getElementById("defaultMenu").click();


window.setInterval(function() {
    if (!document.hidden) {
         crops += (cropsPerSecWBonus/100);
          lifetimeCrops += (cropsPerSecWBonus/100);
    } else {
        crops += (cropsPerSecWBonus);
        lifetimeCrops += (cropsPerSecWBonus);
    }
}, 10); //this adds CropsPerSec to total crops every second

window.setInterval(function() { //checks for achievements
    if (totalClicks >= 1 && achievement01 == 0) {
        achievement01 = 1;
        achievementNotif('images/clickUp1.png', 'It begins...');
        updateAchievements();
    }
    if (totalClicks >= 1000 && achievement02 == 0) {
        achievement02 = 1;
        achievementNotif('images/id02.png', 'Training clicks');
        updateAchievements();
    }
    if (totalClicks >= 5000 && achievement03 == 0) {  
        achievement03 = 1;
        achievementNotif('images/id03.png', 'Getting the hang of it');  
        updateAchievements();
    }
    if (totalClicks >= 15000 && achievement04 == 0) {
        achievement04 = 1;
        achievementNotif('images/id04.png', 'Clickster');
        updateAchievements();
    }
    if (totalClicks >= 50000 && achievement05 == 0) {
        achievement05 = 1;
        achievementNotif('images/id05.png', 'Clickertown');
        updateAchievements();
    }
    if (totalClicks >= 250000 && achievement06 == 0) {
        achievement06 = 1;
        achievementNotif('images/id06.png', 'Lots of clicks');
        updateAchievements();
    }
    if (totalClicks >= 1000000 && achievement07 == 0) {
        achievement07 = 1;
        achievementNotif('images/id07.png', 'The clicker');
        updateAchievements();
    }
    if (lifetimeCrops >= 1000 && achievement08 == 0) {
        achievement08 = 1;
        achievementNotif('images/bean.png', 'First harvest');
        updateAchievements();
    }
    if (lifetimeCrops >= 100000 && achievement09 == 0) {
        achievement09 = 1;
        achievementNotif('images/id09.png', 'Hobbyist');
        updateAchievements();
    }
    if (lifetimeCrops >= 10000000 && achievement10 == 0) {
        achievement10 = 1;
        achievementNotif('images/id10.png', 'Green thumb');
        updateAchievements();
    }
    if (lifetimeCrops >= 1000000000 && achievement11 == 0) {
        achievement11 = 1;
        achievementNotif('images/id11.png', 'The gardener');
        updateAchievements();
    }
    if (lifetimeCrops >= 100000000000 && achievement12 == 0) {
        achievement12 = 1;
        achievementNotif('images/id12.png', 'Novice farmer');
        updateAchievements();
    }
    if (lifetimeCrops >= 10000000000000 && achievement13 == 0) {
        achievement13 = 1;
        achievementNotif('images/id13.png', 'Green hands');
        updateAchievements();
    }
    if (lifetimeCrops >= 1000000000000000 && achievement14 == 0) {
        achievement14 = 1;
        achievementNotif('images/id14.png', 'The harvester');
        updateAchievements();
    }
    if (totalUpgrades >= 10 && achievement15 == 0) {
        achievement15 = 1;
        achievementNotif('images/id15.png', 'Purchasing power');
        updateAchievements();
    }
    if (totalUpgrades >= 25 && achievement16 == 0) {
        achievement16 = 1;
        achievementNotif('images/id16.png', 'Accelerating production');
        updateAchievements();
    }
    if (totalUpgrades >= 50 && achievement17 == 0) {
        achievement17 = 1;
        achievementNotif('images/id17.png', 'Pay to win');
        updateAchievements();
    }
    if (totalBuildings >= 50 && achievement18 == 0) {
        achievement18 = 1;
        achievementNotif('images/id18.png', 'Expanding the farm');
        updateAchievements();
    }
    if (totalBuildings >= 250 && achievement19 == 0) {
        achievement19 = 1;
        achievementNotif('images/id19.png', 'Laying the foundation');
        updateAchievements();
    }
    if (totalBuildings >= 500 && achievement20 == 0) {
        achievement20 = 1;
        achievementNotif('images/id20.png', 'Building the future');
        updateAchievements();
    }
    if (numHelpHands >= 1 && achievement21 == 0) {
        achievement21 = 1;
        achievementNotif('images/helpinghand.png', 'Need a hand?');
        updateAchievements();
    }
    if (numHelpHands >= 25 && achievement22 == 0) {
        achievement22 = 1;
        achievementNotif('images/helpinghand.png', 'Fists full of crops');
        updateAchievements();
    }
    if (numHelpHands >= 50 && achievement23 == 0) {
        achievement23 = 1;
        achievementNotif('images/helpinghand.png', 'Friends come in handy');
        updateAchievements();
    }
    if (numHelpHands >= 100 && achievement24 == 0) {
        achievement24 = 1;
        achievementNotif('images/helpinghand.png', 'Gotta hand it to you');
        updateAchievements();
    }
    if (numFarmerJoe >= 1 && achievement25 == 0) {
        achievement25 = 1;
        achievementNotif('images/farmerjoe.png', 'Business partner');
        updateAchievements();
    }
    if (numFarmerJoe >= 25 && achievement26 == 0) {
        achievement26 = 1;
        achievementNotif('images/farmerjoe.png', 'Board of directors');
        updateAchievements();
    }
    if (numFarmerJoe >= 50 && achievement27 == 0) {
        achievement27 = 1;
        achievementNotif('images/farmerjoe.png', 'Employer');
        updateAchievements();
    }
    if (numFarmerJoe >= 100 && achievement28 == 0) {
        achievement28 = 1;
        achievementNotif('images/farmerjoe.png', 'Who is Joe?');
        updateAchievements();
    }
    if (numField >= 1 && achievement29 == 0) {
        achievement29 = 1;
        achievementNotif('images/field.png', 'Land ownership');
        updateAchievements();
    }
    if (numField >= 25 && achievement30 == 0) {
        achievement30 = 1;
        achievementNotif('images/field.png', 'Country road');
        updateAchievements();
    }
    if (numField >= 50 && achievement31 == 0) {
        achievement31 = 1;
        achievementNotif('images/field.png', 'Town of harvesting');
        updateAchievements();
    }
    if (numField >= 100 && achievement32 == 0) {
        achievement32 = 1;
        achievementNotif('images/field.png', 'Harvest county');
        updateAchievements();
    }
    if (numHarvester >= 1 && achievement33 == 0) {
        achievement33 = 1;
        achievementNotif('images/harvester.png', 'Harvesting permit');
        updateAchievements();
    }
    if (numHarvester >= 25 && achievement34 == 0) {
        achievement34 = 1;
        achievementNotif('images/harvester.png', 'Farming sim');
        updateAchievements();
    }
    if (numHarvester >= 50 && achievement35 == 0) {
        achievement35 = 1;
        achievementNotif('images/harvester.png', 'Combine fleet');
        updateAchievements();
    }
    if (numHarvester >= 100 && achievement36 == 0) {
        achievement36 = 1;
        achievementNotif('images/harvester.png', 'License to harvest');
        updateAchievements();
    }
    if (numGreenhouse >= 1 && achievement37 == 0) {
        achievement37 = 1;
        achievementNotif('images/greenhouse.png', "Growing where they can't go");
        updateAchievements();
    }
    if (numHarvester >= 25 && achievement38 == 0) {
        achievement38 = 1;
        achievementNotif('images/greenhouse.png', 'Green mansion');
        updateAchievements();
    }
    if (numHarvester >= 50 && achievement39 == 0) {
        achievement39 = 1;
        achievementNotif('images/greenhouse.png', 'Antartic complex');
        updateAchievements();
    }
    if (numHarvester >= 100 && achievement40 == 0) {
        achievement40 = 1;
        achievementNotif('images/greenhouse.png', 'Homes for every seed');
        updateAchievements();
    }
    if (numSkyscraper >= 1 && achievement41 == 0) {
        achievement41 = 1;
        achievementNotif('images/skyscraper.png', 'Thinking big');
        updateAchievements();
    }
    if (numSkyscraper >= 25 && achievement42 == 0) {
        achievement42 = 1;
        achievementNotif('images/skyscraper.png', 'City block');
        updateAchievements();
    }
    if (numSkyscraper >= 50 && achievement43 == 0) {
        achievement43 = 1;
        achievementNotif('images/skyscraper.png', 'Harvesting superstructures');
        updateAchievements();
    }
    if (numSkyscraper >= 100 && achievement44 == 0) {
        achievement44 = 1;
        achievementNotif('images/skyscraper.png', 'Beantopolis');
        updateAchievements();
    }
    if (numBunkers >= 1 && achievement45 == 0) {
        achievement45 = 1;
        achievementNotif('images/bunker.png', 'Going down');
        updateAchievements();
    }
    if (numBunkers >= 25 && achievement46 == 0) {
        achievement46 = 1;
        achievementNotif('images/bunker.png', 'Dungeon crawling');
        updateAchievements();
    }
    if (numBunkers >= 50 && achievement47 == 0) {
        achievement47 = 1;
        achievementNotif('images/bunker.png', 'C.O.R.E facility');
        updateAchievements();
    }
    if (numBunkers >= 100 && achievement48 == 0) {
        achievement48 = 1;
        achievementNotif('images/bunker.png', 'Yeleven');
        updateAchievements();
    }
    if (numReplicator >= 1 && achievement49 == 0) {
        achievement49 = 1;
        achievementNotif('images/replicator.png', 'Getting creative');
        updateAchievements();
    }
    if (numReplicator >= 25 && achievement50 == 0) {
        achievement50 = 1;
        achievementNotif('images/replicator.png', 'Copynpasteinator');
        updateAchievements();
    }
    if (numReplicator >= 50 && achievement51 == 0) {
        achievement51 = 1;
        achievementNotif('images/replicator.png', 'bean - copy.png');
        updateAchievements();
    }
    if (numReplicator >= 100 && achievement52 == 0) {
        achievement52 = 1;
        achievementNotif('images/replicator.png', 'Replicated replicators');
        updateAchievements();
    }
    if (numPlanet >= 1 && achievement53 == 0) {
        achievement53 = 1;
        achievementNotif('images/planet.png', 'Far far away...');
        updateAchievements();
    }
    if (numPlanet >= 25 && achievement54 == 0) {
        achievement54 = 1;
        achievementNotif('images/planet.png', 'Solar system');
        updateAchievements();
    }
    if (numPlanet >= 50 && achievement55 == 0) {
        achievement55 = 1;
        achievementNotif('images/planet.png', 'Bean shaped galaxy');
        updateAchievements();
    }
    if (numPlanet >= 100 && achievement56 == 0) {
        achievement56 = 1;
        achievementNotif('images/planet.png', 'Cropiverse?');
        updateAchievements();
    }
    if (numTransmutator >= 1 && achievement57 == 0) {
        achievement57 = 1;
        achievementNotif('images/transmutator.png', 'Bending the rules');
        updateAchievements();
    }
    if (numTransmutator >= 25 && achievement58 == 0) {
        achievement58 = 1;
        achievementNotif('images/transmutator.png', 'Dead constellations');
        updateAchievements();
    }
    if (numTransmutator >= 50 && achievement59 == 0) {
        achievement59 = 1;
        achievementNotif('images/transmutator.png', 'What about the crops?');
        updateAchievements();
    }
    if (numTransmutator >= 100 && achievement60 == 0) {
        achievement60 = 1;
        achievementNotif('images/transmutator.png', 'Galaxy blackout');
        updateAchievements();
    }
    if (totalCropTypes >= 1 && achievement61 == 0) {
        achievement61 = 1;
        achievementNotif('images/id61.png', 'Crop finder');
        updateAchievements();
    }
    if (totalCropTypes >= 5 && achievement62 == 0) {
        achievement62 = 1;
        achievementNotif('images/id62.png', 'Specimen accumulator');
        updateAchievements();
    }
    if (totalCropTypes >= 10 && achievement63 == 0) {
        achievement63 = 1;
        achievementNotif('images/id63.png', 'Produce compiler');
        updateAchievements();
    }
    if (totalCropTypes >= 25 && achievement64 == 0) {
        achievement64 = 1;
        achievementNotif('images/id64.png', 'Agricultural connoisseur');
        updateAchievements();
    }
}, 5000);
function unlockAchievements(id, idTitle, idDesc, idName, imgUrl, desc) {
    document.getElementById(id).src = imgUrl;
    document.getElementById(idTitle).innerHTML = idName;
    document.getElementById(idDesc).innerHTML = desc;
}
function updateAchievements() {
    if (achievement01 == 1) { unlockAchievements('achievement01', '01title', '01desc', 'It begins...', 'images/clickUp1.png', 'Click for the first time'); }
    if (achievement02 == 1) { unlockAchievements('achievement02', '02title', '02desc', 'Training clicks', 'images/id02.png', 'Click 1,000 times'); }
    if (achievement03 == 1) { unlockAchievements('achievement03', '03title', '03desc', 'Getting the hang of it', 'images/id03.png', 'Click 5,000 times'); }
    if (achievement04 == 1) { unlockAchievements('achievement04', '04title', '04desc', 'Clickster', 'images/id04.png', 'Click 15,000 times'); }
    if (achievement05 == 1) { unlockAchievements('achievement05', '05title', '05desc', 'Clickertown', 'images/id05.png', 'Click 50,000 times'); }
    if (achievement06 == 1) { unlockAchievements('achievement06', '06title', '06desc', 'Lots of clicks', 'images/id06.png', 'Click 250,000 times'); }
    if (achievement07 == 1) { unlockAchievements('achievement07', '07title', '07desc', 'The clicker', 'images/id07.png', 'Click 1,000,000 times'); }
    if (achievement08 == 1) { unlockAchievements('achievement08', '08title', '08desc', 'First harvest', 'images/bean.png', 'Harvest 1,000 total crops'); }
    if (achievement09 == 1) { unlockAchievements('achievement09', '09title', '09desc', 'Hobbyist', 'images/id09.png', 'Harvest 100,000 total crops'); }
    if (achievement10 == 1) { unlockAchievements('achievement10', '10title', '10desc', 'Green thumb', 'images/id10.png', 'Harvest 10 million total crops'); }
    if (achievement11 == 1) { unlockAchievements('achievement11', '11title', '11desc', 'The gardener', 'images/id11.png', 'Harvest 1 billion total crops'); }
    if (achievement12 == 1) { unlockAchievements('achievement12', '12title', '12desc', 'Novice farmer', 'images/id12.png', 'Harvest 100 billion total crops'); }
    if (achievement13 == 1) { unlockAchievements('achievement13', '13title', '13desc', 'Green hands', 'images/id13.png', 'Harvest 10 trillion total crops'); }
    if (achievement14 == 1) { unlockAchievements('achievement14', '14title', '14desc', 'The harvester', 'images/id14.png', 'Harvest 1 quadrillion total crops'); }
    if (achievement15 == 1) { unlockAchievements('achievement15', '15title', '15desc', 'Purchasing power', 'images/id15.png', 'Purchase 10 upgrades'); }
    if (achievement16 == 1) { unlockAchievements('achievement16', '16title', '16desc', 'Accelerating production', 'images/id16.png', 'Purchase 25 upgrades'); }
    if (achievement17 == 1) { unlockAchievements('achievement17', '17title', '17desc', 'Pay to win', 'images/id17.png', 'Purchase 50 upgrades'); }
    if (achievement18 == 1) { unlockAchievements('achievement18', '18title', '18desc', 'Expanding the farm', 'images/id18.png', 'Own 50 buildings'); }
    if (achievement19 == 1) { unlockAchievements('achievement19', '19title', '19desc', 'Laying the foundation', 'images/id19.png', 'Own 250 buildings'); }
    if (achievement20 == 1) { unlockAchievements('achievement20', '20title', '20desc', 'Building the future', 'images/id20.png', 'Own 500 buildings'); }
    if (achievement21 == 1) { unlockAchievements('achievement21', '21title', '21desc', 'Need a hand?', 'images/helpinghand.png', 'Own 1 helping hand'); }
    if (achievement22 == 1) { unlockAchievements('achievement22', '22title', '22desc', 'Fists full of crops', 'images/helpinghand.png', 'Own 25 helping hands'); }
    if (achievement23 == 1) { unlockAchievements('achievement23', '23title', '23desc', 'Friends come in handy', 'images/helpinghand.png', 'Own 50 helping hands'); }
    if (achievement24 == 1) { unlockAchievements('achievement24', '24title', '24desc', 'Gotta hand it to you', 'images/helpinghand.png', 'Own 100 helping hands'); }
    if (achievement25 == 1) { unlockAchievements('achievement25', '25title', '25desc', 'Business partner', 'images/farmerjoe.png', 'Own 1 farmer Joe'); }
    if (achievement26 == 1) { unlockAchievements('achievement26', '26title', '26desc', 'Board of directors', 'images/farmerjoe.png', 'Own 25 farmer Joes'); }
    if (achievement27 == 1) { unlockAchievements('achievement27', '27title', '27desc', 'Employer', 'images/farmerjoe.png', 'Own 50 farmer Joes'); }
    if (achievement28 == 1) { unlockAchievements('achievement28', '28title', '28desc', 'Who is Joe?', 'images/farmerjoe.png', 'Own 100 farmer Joes'); }
    if (achievement29 == 1) { unlockAchievements('achievement29', '29title', '29desc', 'Land ownership', 'images/field.png', 'Own 1 magic field'); }
    if (achievement30 == 1) { unlockAchievements('achievement30', '30title', '30desc', 'Country road', 'images/field.png', 'Own 25 magic fields'); }
    if (achievement31 == 1) { unlockAchievements('achievement31', '31title', '31desc', 'Town of harvesting', 'images/field.png', 'Own 50 magic fields'); }
    if (achievement32 == 1) { unlockAchievements('achievement32', '32title', '32desc', 'Harvest county', 'images/field.png', 'Own 100 magic fields'); }
    if (achievement33 == 1) { unlockAchievements('achievement33', '33title', '33desc', 'Harvesting permit', 'images/harvester.png', 'Own 1 combine'); }
    if (achievement34 == 1) { unlockAchievements('achievement34', '34title', '34desc', 'Farming sim', 'images/harvester.png', 'Own 25 combines'); }
    if (achievement35 == 1) { unlockAchievements('achievement35', '35title', '35desc', 'Combine fleet', 'images/harvester.png', 'Own 50 combines'); }
    if (achievement36 == 1) { unlockAchievements('achievement36', '36title', '36desc', 'License to harvest', 'images/harvester.png', 'Own 100 combines'); }
    if (achievement37 == 1) { unlockAchievements('achievement37', '37title', '37desc', "Growing where they can't go", 'images/greenhouse.png', 'Own 1 greenhouse'); }
    if (achievement38 == 1) { unlockAchievements('achievement38', '38title', '38desc', "Green mansion", 'images/greenhouse.png', 'Own 25 greenhouses'); }
    if (achievement39 == 1) { unlockAchievements('achievement39', '39title', '39desc', "Antarctic complex", 'images/greenhouse.png', 'Own 50 greenhouses'); }
    if (achievement40 == 1) { unlockAchievements('achievement40', '40title', '40desc', "Homes for every seed", 'images/greenhouse.png', 'Own 100 greenhouses'); }
    if (achievement41 == 1) { unlockAchievements('achievement41', '41title', '41desc', "Thinking big", 'images/skyscraper.png', 'Own 1 skyscraper'); }
    if (achievement42 == 1) { unlockAchievements('achievement42', '42title', '42desc', "City block", 'images/skyscraper.png', 'Own 25 skyscrapers'); }
    if (achievement43 == 1) { unlockAchievements('achievement43', '43title', '43desc', "Harvesting superstructures", 'images/skyscraper.png', 'Own 50 skyscrapers'); }
    if (achievement44 == 1) { unlockAchievements('achievement44', '44title', '44desc', "Beantopolis", 'images/skyscraper.png', 'Own 100 skyscrapers'); }
    if (achievement45 == 1) { unlockAchievements('achievement45', '45title', '45desc', "Going down", 'images/bunker.png', 'Own 1 bunker'); }
    if (achievement46 == 1) { unlockAchievements('achievement46', '46title', '46desc', "Dungeon crawling", 'images/bunker.png', 'Own 25 bunkers'); }
    if (achievement47 == 1) { unlockAchievements('achievement47', '47title', '47desc', "C.O.R.E facility", 'images/bunker.png', 'Own 50 bunkers'); }
    if (achievement48 == 1) { unlockAchievements('achievement48', '48title', '48desc', "Yeleven", 'images/bunker.png', 'Own 100 bunkers'); }
    if (achievement49 == 1) { unlockAchievements('achievement49', '49title', '49desc', "Getting creative", 'images/replicator.png', 'Own 1 replicator'); }
    if (achievement50 == 1) { unlockAchievements('achievement50', '50title', '50desc', "Copynpasteinator", 'images/replicator.png', 'Own 25 replicators'); }
    if (achievement51 == 1) { unlockAchievements('achievement51', '51title', '51desc', "bean - copy.png", 'images/replicator.png', 'Own 50 replicators'); }
    if (achievement52 == 1) { unlockAchievements('achievement52', '52title', '52desc', "Replicated replicators", 'images/replicator.png', 'Own 100 replicators'); }
    if (achievement53 == 1) { unlockAchievements('achievement53', '53title', '53desc', "Far far away...", 'images/planet.png', 'Own 1 planet'); }
    if (achievement54 == 1) { unlockAchievements('achievement54', '54title', '54desc', "Solar system", 'images/planet.png', 'Own 25 planets'); }
    if (achievement55 == 1) { unlockAchievements('achievement55', '55title', '55desc', "Bean shaped galaxy", 'images/planet.png', 'Own 50 planets'); }
    if (achievement56 == 1) { unlockAchievements('achievement56', '56title', '56desc', "Cropiverse?", 'images/planet.png', 'Own 100 planets'); }
    if (achievement57 == 1) { unlockAchievements('achievement57', '57title', '57desc', "Bending the rules", 'images/transmutator.png', 'Own 1 transmutator'); }
    if (achievement58 == 1) { unlockAchievements('achievement58', '58title', '58desc', "Dead constellations", 'images/transmutator.png', 'Own 25 transmutators'); }
    if (achievement59 == 1) { unlockAchievements('achievement59', '59title', '59desc', "What about the crops?", 'images/transmutator.png', 'Own 50 transmutators'); }
    if (achievement60 == 1) { unlockAchievements('achievement60', '60title', '60desc', "Galaxy blackout", 'images/transmutator.png', 'Own 100 transmutators'); }
    if (achievement61 == 1) { unlockAchievements('achievement61', '61title', '61desc', "Crop finder", 'images/id61.png', 'Own 1 crop type'); }
    if (achievement62 == 1) { unlockAchievements('achievement62', '62title', '62desc', "Specimen accumulator", 'images/id62.png', 'Own 5 crop types'); }
    if (achievement63 == 1) { unlockAchievements('achievement63', '63title', '63desc', "Produce compiler", 'images/id63.png', 'Own 10 crop types'); }
    if (achievement64 == 1) { unlockAchievements('achievement64', '64title', '64desc', "Agricultural connoisseur", 'images/id64.png', 'Own 25 crop types'); }
}
function upgrageTabSwitch(upgradeName) {
    document.getElementById('purchased').appendChild(document.getElementById(upgradeName));
    document.getElementById(upgradeName).classList.add('bought');
}
function allUpgradeCheck() {
    if (unlockedJoe) { document.getElementById('farmerjoe').classList.remove('buildingLocked'); }
    if (unlockedField) { document.getElementById('field').classList.remove('buildingLocked'); }
    if (unlockedHarvester) { document.getElementById('harvester').classList.remove('buildingLocked'); }
    if (unlockedGreenhouse) { document.getElementById('greenhouse').classList.remove('buildingLocked'); }
    if (unlockedSkyscraper) { document.getElementById('skyscraper').classList.remove('buildingLocked'); }
    if (unlockedBunker) { document.getElementById('bunker').classList.remove('buildingLocked'); }
    if (unlockedReplicator) { document.getElementById('replicator').classList.remove('buildingLocked'); }
    if (unlockedPlanet) { document.getElementById('planet').classList.remove('buildingLocked'); }
    if (unlockedTransmutator) { document.getElementById('transmutator').classList.remove('buildingLocked'); }
    if (helpHandUpI == 2) { upgrageTabSwitch('helphandI'); }
    if (helpHandUpII == 2) { upgrageTabSwitch('helphandII'); }
    if (helpHandUpIII == 2) { upgrageTabSwitch('helphandIII'); }
    if (helpHandUpIV == 2) { upgrageTabSwitch('helphandIV'); }
    if (helpHandUpV == 2) { upgrageTabSwitch('helphandV'); }
    if (helpHandUpVI == 2) { upgrageTabSwitch('helphandVI'); }
    if (helpHandUpVII == 2) { upgrageTabSwitch('helphandVII'); }
    if (helpHandUpVIII == 2) { upgrageTabSwitch('helphandVIII'); }
    if (helpHandUpIX == 2) { upgrageTabSwitch('helphandIX'); }
    if (helpHandUpX == 2) { upgrageTabSwitch('helphandX'); }
    if (helpHandUpXI == 2) { upgrageTabSwitch('helphandXI'); }
    if (clickUp1 == 1) { upgrageTabSwitch('clicking1'); }
    if (clickUp2 == 1) { upgrageTabSwitch('clicking2'); }
    if (clickUp3 == 1) { upgrageTabSwitch('clicking3'); }
    if (clickUp4 == 1) { upgrageTabSwitch('clicking4'); }
    if (clickUp5 == 1) { upgrageTabSwitch('clicking5'); }
    if (farmerJoeUpI == 2) { upgrageTabSwitch("farmerjoeI"); }
    if (farmerJoeUpII == 2) { upgrageTabSwitch('farmerjoeII'); }
    if (farmerJoeUpIII == 2) { upgrageTabSwitch('farmerjoeIII'); }
    if (farmerJoeUpIV == 2) { upgrageTabSwitch('farmerjoeIV'); }
    if (farmerJoeUpV == 2) { upgrageTabSwitch('farmerjoeV'); }
    if (fieldUpI == 2) { upgrageTabSwitch('fieldI'); }
    if (fieldUpII == 2) { upgrageTabSwitch('fieldII'); }
    if (fieldUpIII == 2) { upgrageTabSwitch('fieldIII'); }
    if (fieldUpIV == 2) { upgrageTabSwitch('fieldIV'); }
    if (fieldUpV == 2) { upgrageTabSwitch('fieldV'); }
    if (harvesterUpI == 2) { upgrageTabSwitch('harvesterI'); }
    if (harvesterUpII == 2) { upgrageTabSwitch('harvesterII'); }
    if (harvesterUpIII == 2) { upgrageTabSwitch('harvesterIII'); }
    if (harvesterUpIV == 2) { upgrageTabSwitch('harvesterIV'); }
    if (harvesterUpV == 2) { upgrageTabSwitch('harvesterV'); }
    if (greenhouseUpI == 2) { upgrageTabSwitch('greenhouseI'); }
    if (greenhouseUpII == 2) { upgrageTabSwitch('greenhouseII'); }
    if (greenhouseUpIII == 2) { upgrageTabSwitch('greenhouseIII'); }
    if (greenhouseUpIV == 2) { upgrageTabSwitch('greenhouseIV'); }
    if (greenhouseUpV == 2) { upgrageTabSwitch('greenhouseV'); }
    if (skyscraperUpI == 2) { upgrageTabSwitch('skyscraperI'); }
    if (skyscraperUpII == 2) { upgrageTabSwitch('skyscraperII'); }
    if (skyscraperUpIII == 2) { upgrageTabSwitch('skyscraperIII'); }
    if (skyscraperUpIV == 2) { upgrageTabSwitch('skyscraperIV'); }
    if (skyscraperUpV == 2) { upgrageTabSwitch('skyscraperV'); }
    if (bunkerUpI == 2) { upgrageTabSwitch('bunkerI'); }
    if (bunkerUpII == 2) { upgrageTabSwitch('bunkerII'); }
    if (bunkerUpIII == 2) { upgrageTabSwitch('bunkerIII'); }
    if (bunkerUpIV == 2) { upgrageTabSwitch('bunkerIV'); }
    if (bunkerUpV == 2) { upgrageTabSwitch('bunkerV'); }
    if (replicatorUpI == 2) { upgrageTabSwitch('replicatorI'); }
    if (replicatorUpII == 2) { upgrageTabSwitch('replicatorII'); }
    if (replicatorUpIII == 2) { upgrageTabSwitch('replicatorIII'); }
    if (replicatorUpIV == 2) { upgrageTabSwitch('replicatorIV'); }
    if (replicatorUpV == 2) { upgrageTabSwitch('replicatorV'); }
    if (planetUpI == 2) { upgrageTabSwitch('planetI'); }
    if (planetUpII == 2) { upgrageTabSwitch('planetII'); }
    if (planetUpIII == 2) { upgrageTabSwitch('planetIII'); }
    if (planetUpIV == 2) { upgrageTabSwitch('planetIV'); }
    if (planetUpV == 2) { upgrageTabSwitch('planetV'); }
    if (transmutatorUpI == 2) { upgrageTabSwitch('transmutatorI'); }
    if (transmutatorUpII == 2) { upgrageTabSwitch('transmutatorII'); }
    if (transmutatorUpIII == 2) { upgrageTabSwitch('transmutatorIII'); }
    if (transmutatorUpIV == 2) { upgrageTabSwitch('transmutatorIV'); }
    if (transmutatorUpV == 2) { upgrageTabSwitch('transmutatorV'); }
    if (carrotUp == 1) { upgrageTabSwitch('carrot'); }
    if (tomato01Up == 1) { upgrageTabSwitch('tomato01'); }
    if (wheat01Up == 1) { upgrageTabSwitch('wheat01'); }
    if (peaUp == 1) { upgrageTabSwitch('pea'); }
    if (potato01Up == 1) { upgrageTabSwitch('potato01'); }
    if (soybeanUp == 1) { upgrageTabSwitch('soybean'); }
    if (lettuceUp == 1) { upgrageTabSwitch('lettuce'); }
    if (wheat02Up == 1) { upgrageTabSwitch('wheat02'); }
    if (turnipUp == 1) { upgrageTabSwitch('turnip'); }
    if (onionUp == 1) { upgrageTabSwitch('onion'); }
    if (tomato02Up == 1) { upgrageTabSwitch('tomato02'); }
    if (cornUp == 2) {upgrageTabSwitch('corn');}
    if (cucumberUp == 2) { upgrageTabSwitch('cucumber'); }
    if (milletUp == 2) { upgrageTabSwitch('millet'); }
    if (beetUp == 2) { upgrageTabSwitch('beet'); }
    if (eggplantUp == 2) { upgrageTabSwitch('eggplant'); }
    if (pepperUp == 2) { upgrageTabSwitch('pepper'); }
    if (sugarcaneUp == 2) { upgrageTabSwitch('sugarcane'); }
    if (garlicUp == 2) { upgrageTabSwitch('garlic'); }
    if (tomato03Up == 2) { upgrageTabSwitch('tomato03'); }
    if (potato02Up == 5) { upgrageTabSwitch('potato02'); }
    if (riceUp == 5) { upgrageTabSwitch('rice'); }
    if (pumpkinUp == 5) { upgrageTabSwitch('pumpkin'); }
    if (cassavaUp == 5) { upgrageTabSwitch('cassava'); }
    if (sunflowerUp == 5) { upgrageTabSwitch('sunflower'); }
    if (nightMode == 1) {
        document.getElementById('canvas').classList.remove('daymode');
        document.getElementById('canvas').classList.add('nightmode');
        nightModeBtn.value = 'on';
        nightModeBtn.innerHTML = 'Night Mode | ON';
    }
    if (soundSetting == 1) {
        soundSettingBtn.value == 'on'
        soundSettingBtn.value = 'off';
        soundSettingBtn.innerHTML = 'Audio | OFF';
    }
    
}

window.setInterval(function cpsdisplay() {
    document.getElementById("score").innerHTML = commaForm.format(Math.round(crops)) + " " + "crops";//displays total crops
    var helphandbtn = document.getElementById("helphand");
    var farmerjoebtn = document.getElementById("farmerjoe");
    var fieldbtn = document.getElementById("field");
    var harvesterbtn = document.getElementById("harvester");
    var greenhousebtn = document.getElementById("greenhouse");
    var skyscraperbtn = document.getElementById("skyscraper");
    var bunkerbtn = document.getElementById("bunker");
    var replicatorbtn = document.getElementById("replicator");
    var planetbtn = document.getElementById("planet");
    var transmutatorbtn = document.getElementById("transmutator");
    upgradeCheck();
    if (crops < costHelpHand) {//these ifs are used for store button disable if you dont have enough crops
        helphandbtn.disabled = true;
        helphandbtn.classList.add("cantbuy");
    }
    else {
        helphandbtn.disabled = false;
        helphandbtn.classList.remove("cantbuy");
    }
    if (crops < costFarmerJoe) {
        farmerjoebtn.disabled = true;
        farmerjoebtn.classList.add("cantbuy");
    }
    else {
        farmerjoebtn.disabled = false;
        farmerjoebtn.classList.remove("cantbuy");
    }
    if (crops < costField) {
        fieldbtn.disabled = true;
        fieldbtn.classList.add("cantbuy");
    }
    else {
        fieldbtn.disabled = false;
        fieldbtn.classList.remove("cantbuy");
    }
    if (crops < costHarvester) {
        harvesterbtn.disabled = true;
        harvesterbtn.classList.add("cantbuy");
    }
    else {
        harvesterbtn.disabled = false;
        harvesterbtn.classList.remove("cantbuy");
    }
    if (crops < costGreenhouse) {
        greenhousebtn.disabled = true;
        greenhousebtn.classList.add("cantbuy");
    }
    else {
        greenhousebtn.disabled = false;
        greenhousebtn.classList.remove("cantbuy");
    }
    if (crops < costSkyscraper) {
        skyscraperbtn.disabled = true;
        skyscraperbtn.classList.add("cantbuy");
    }
    else {
        skyscraperbtn.disabled = false;
        skyscraperbtn.classList.remove("cantbuy");
    }
    if (crops < costBunkers) {
        bunkerbtn.disabled = true;
        bunkerbtn.classList.add("cantbuy");
    } else {
        bunkerbtn.disabled = false;
        bunkerbtn.classList.remove("cantbuy");
    }
    if (crops < costReplicator) {
        replicatorbtn.disabled = true;
        replicatorbtn.classList.add("cantbuy");
    } else {
        replicatorbtn.disabled = false;
        replicatorbtn.classList.remove("cantbuy");
    }
    if (crops < costPlanet) {
        planetbtn.disabled = true;
        planetbtn.classList.add("cantbuy");
    } else {
        planetbtn.disabled = false;
        planetbtn.classList.remove("cantbuy");
    }
    if (crops < costTransmutator) {
        transmutatorbtn.disabled = true;
        transmutatorbtn.classList.add("cantbuy");
    } else {
        transmutatorbtn.disabled = false;
        transmutatorbtn.classList.remove("cantbuy");
    }
    if (crops > (costFarmerJoe/2)) {
        unlockedJoe = true;
        document.getElementById('farmerjoe').classList.remove('buildingLocked');
    }
    if (crops > (costField/2)) {
        unlockedField = true;
        document.getElementById('field').classList.remove('buildingLocked');
    }
    if (crops > (costHarvester/2)) {
        unlockedHarvester = true;
        document.getElementById('harvester').classList.remove('buildingLocked');
    }
    if (crops > (costGreenhouse/2)) {
        unlockedGreenhouse = true;
        document.getElementById('greenhouse').classList.remove('buildingLocked');
    }
    if (crops > (costSkyscraper/2)) {
        unlockedSkyscraper = true;
        document.getElementById('skyscraper').classList.remove('buildingLocked');
    }
    if (crops > (costBunkers/2)) {
        unlockedBunker = true;
        document.getElementById('bunker').classList.remove('buildingLocked');
    }
    if (crops > (costReplicator/2)) {
        unlockedReplicator = true;
        document.getElementById('replicator').classList.remove('buildingLocked');
    }
    if (crops > (costPlanet/2)) {
        unlockedPlanet = true;
        document.getElementById('planet').classList.remove('buildingLocked');
    }
    if (crops > (costTransmutator/2)) {
        unlockedTransmutator = true;
        document.getElementById('transmutator').classList.remove('buildingLocked');
    }
    cantBuyUpgrade(100, upgradeIcon[0]);
    cantBuyUpgrade(500, upgradeIcon[1]);
    cantBuyUpgrade(3000, upgradeIcon[2]);
    cantBuyUpgrade(100000, upgradeIcon[3]);
    cantBuyUpgrade(100000000, upgradeIcon[4]);
    cantBuyUpgrade(200000000000, upgradeIcon[5]);
    cantBuyUpgrade(250000000000000, upgradeIcon[6]);
    cantBuyUpgrade(100000000000000, upgradeIcon[7]);
    cantBuyUpgrade(1000000000000000, upgradeIcon[8]);
    cantBuyUpgrade(100000000000000000, upgradeIcon[9]);
    cantBuyUpgrade(1000000000000000000, upgradeIcon[10]);
    cantBuyUpgrade(1000, upgradeIcon[11]);
    cantBuyUpgrade(15000, upgradeIcon[12]);
    cantBuyUpgrade(150000, upgradeIcon[13]);
    cantBuyUpgrade(1000000, upgradeIcon[14]);
    cantBuyUpgrade(25000000, upgradeIcon[15]);
    cantBuyUpgrade(5000, upgradeIcon[16]);
    cantBuyUpgrade(15000, upgradeIcon[17]);
    cantBuyUpgrade(75000, upgradeIcon[18]);
    cantBuyUpgrade(3000000, upgradeIcon[19]);
    cantBuyUpgrade(3500000000, upgradeIcon[20]);
    cantBuyUpgrade(60000, upgradeIcon[21]);
    cantBuyUpgrade(110000, upgradeIcon[22]);
    cantBuyUpgrade(750000, upgradeIcon[23]);
    cantBuyUpgrade(2750000, upgradeIcon[24]);
    cantBuyUpgrade(3000000000, upgradeIcon[25]);
    cantBuyUpgrade(500000, upgradeIcon[26]);
    cantBuyUpgrade(1000000, upgradeIcon[27]);
    cantBuyUpgrade(7250000, upgradeIcon[28]);
    cantBuyUpgrade(250000000, upgradeIcon[29]);
    cantBuyUpgrade(275000000000, upgradeIcon[30]);
    cantBuyUpgrade(5000000, upgradeIcon[31]);
    cantBuyUpgrade(10000000, upgradeIcon[32]);
    cantBuyUpgrade(75000000, upgradeIcon[33]);
    cantBuyUpgrade(2750000000, upgradeIcon[34]);
    cantBuyUpgrade(3000000000000, upgradeIcon[35]);
    cantBuyUpgrade(50000000, upgradeIcon[36]);
    cantBuyUpgrade(100000000, upgradeIcon[37]);
    cantBuyUpgrade(800000000, upgradeIcon[38]);
    cantBuyUpgrade(27500000000, upgradeIcon[39]);
    cantBuyUpgrade(30000000000000, upgradeIcon[40]);
    cantBuyUpgrade(575000000, upgradeIcon[41]);
    cantBuyUpgrade(1000000000, upgradeIcon[42]);
    cantBuyUpgrade(8250000000, upgradeIcon[43]);
    cantBuyUpgrade(275000000000, upgradeIcon[44]);
    cantBuyUpgrade(300000000000000, upgradeIcon[45]);
    cantBuyUpgrade(5000000000, upgradeIcon[46]);
    cantBuyUpgrade(12000000000, upgradeIcon[47]);
    cantBuyUpgrade(80000000000, upgradeIcon[48]);
    cantBuyUpgrade(2725000000000, upgradeIcon[49]);
    cantBuyUpgrade(3500000000000000, upgradeIcon[50]);
    cantBuyUpgrade(500000000000, upgradeIcon[51]);
    cantBuyUpgrade(1000000000000, upgradeIcon[52]);
    cantBuyUpgrade(8250000000000, upgradeIcon[53]);
    cantBuyUpgrade(275000000000000, upgradeIcon[54]);
    cantBuyUpgrade(300000000000000000, upgradeIcon[55]);
    cantBuyUpgrade(5000000000000, upgradeIcon[56]);
    cantBuyUpgrade(10000000000000, upgradeIcon[57]);
    cantBuyUpgrade(75000000000000, upgradeIcon[58]);
    cantBuyUpgrade(2500000000000000, upgradeIcon[59]);
    cantBuyUpgrade(3000000000000000000, upgradeIcon[60]);
    cantBuyUpgrade(100000, upgradeIcon[61]);
    cantBuyUpgrade(250000, upgradeIcon[62]);
    cantBuyUpgrade(3000000, upgradeIcon[63]);
    cantBuyUpgrade(5000000, upgradeIcon[64]);
    cantBuyUpgrade(250000, upgradeIcon[65]);
    cantBuyUpgrade(1000000, upgradeIcon[66]);
    cantBuyUpgrade(100000, upgradeIcon[67]);
    cantBuyUpgrade(7500000, upgradeIcon[68]);
    cantBuyUpgrade(1000000, upgradeIcon[69]);
    cantBuyUpgrade(100000, upgradeIcon[70]);
    cantBuyUpgrade(2500000, upgradeIcon[71]);
    cantBuyUpgrade(10000000, upgradeIcon[72]);
    cantBuyUpgrade(5000000, upgradeIcon[73]);
    cantBuyUpgrade(2000000000, upgradeIcon[74]);
    cantBuyUpgrade(255000000, upgradeIcon[75]);
    cantBuyUpgrade(150000000, upgradeIcon[76]);
    cantBuyUpgrade(400000000, upgradeIcon[77]);
    cantBuyUpgrade(5000000, upgradeIcon[78]);
    cantBuyUpgrade(1000000000, upgradeIcon[79]);
    cantBuyUpgrade(50000000, upgradeIcon[80]);
    cantBuyUpgrade(600000000, upgradeIcon[81]);
    cantBuyUpgrade(4000000000, upgradeIcon[82]);
    cantBuyUpgrade(75000000000, upgradeIcon[83]);
    cantBuyUpgrade(25000000000, upgradeIcon[84]);
    cantBuyUpgrade(10000000000, upgradeIcon[85]);
}, 10)

function cantBuyUpgrade(upgradeCost, imgid) {
    if (crops < upgradeCost && !(imgid.classList.contains('bought'))) {
        imgid.classList.add("cantbuy");
    } else {
        imgid.classList.remove("cantbuy");
    }
}

window.setInterval(function() {//autosave
    saveGame();
    updateStats();
}, 30000)

function saveGame() {
    localStorage.setItem("savedCrops", JSON.stringify(crops));
    localStorage.setItem("savedHand", JSON.stringify(numHelpHands));
    localStorage.setItem("totalclicks", JSON.stringify(totalClicks));
    localStorage.setItem("totalCropHarvest", JSON.stringify(lifetimeCrops));
    localStorage.setItem('cropsByHand', JSON.stringify(cropsByHand));
    localStorage.setItem('startDate', JSON.stringify(editFarmStart));
    localStorage.setItem('unlockedJoe', JSON.stringify(unlockedJoe));
    localStorage.setItem('unlockedField', JSON.stringify(unlockedField));
    localStorage.setItem('unlockedHarvester', JSON.stringify(unlockedHarvester));
    localStorage.setItem('unlockedGreenhouse', JSON.stringify(unlockedGreenhouse));
    localStorage.setItem('unlockedSkyscraper', JSON.stringify(unlockedSkyscraper));
    localStorage.setItem('unlockedBunker', JSON.stringify(unlockedBunker));
    localStorage.setItem('unlockedReplicator', JSON.stringify(unlockedReplicator));
    localStorage.setItem('unlockedPlanet', JSON.stringify(unlockedPlanet));
    localStorage.setItem('unlockedTransmutator', JSON.stringify(unlockedTransmutator));
    localStorage.setItem("handUp1", JSON.stringify(helpHandUpI));
    localStorage.setItem('handUp2', JSON.stringify(helpHandUpII));
    localStorage.setItem('handUp3', JSON.stringify(helpHandUpIII));
    localStorage.setItem('handUp4', JSON.stringify(helpHandUpIV));
    localStorage.setItem('handUp5', JSON.stringify(helpHandUpV));
    localStorage.setItem('handUp6', JSON.stringify(helpHandUpVI));
    localStorage.setItem('handUp7', JSON.stringify(helpHandUpVII));
    localStorage.setItem('handUp8', JSON.stringify(helpHandUpVIII));
    localStorage.setItem('handUp9', JSON.stringify(helpHandUpIX));
    localStorage.setItem('handUp10', JSON.stringify(helpHandUpX));
    localStorage.setItem('handUp11', JSON.stringify(helpHandUpXI));
    localStorage.setItem('clickUp1', JSON.stringify(clickUp1));
    localStorage.setItem('clickUp2', JSON.stringify(clickUp2));
    localStorage.setItem('clickUp3', JSON.stringify(clickUp3));
    localStorage.setItem('clickUp4', JSON.stringify(clickUp4));
    localStorage.setItem('clickUp5', JSON.stringify(clickUp5));
    localStorage.setItem("joeUp1", JSON.stringify(farmerJoeUpI));
    localStorage.setItem('joeUp2', JSON.stringify(farmerJoeUpII));
    localStorage.setItem('joeUp3', JSON.stringify(farmerJoeUpIII));
    localStorage.setItem('joeUp4', JSON.stringify(farmerJoeUpIV));
    localStorage.setItem('joeUp5', JSON.stringify(farmerJoeUpV));
    localStorage.setItem('fieldUp1', JSON.stringify(fieldUpI));
    localStorage.setItem('fieldUp2', JSON.stringify(fieldUpII));
    localStorage.setItem('fieldUp3', JSON.stringify(fieldUpIII));
    localStorage.setItem('fieldUp4', JSON.stringify(fieldUpIV));
    localStorage.setItem('fieldUp5', JSON.stringify(fieldUpV));
    localStorage.setItem('harvesterUp1', JSON.stringify(harvesterUpI));
    localStorage.setItem('harvesterUp2', JSON.stringify(harvesterUpII));
    localStorage.setItem('harvesterUp3', JSON.stringify(harvesterUpIII));
    localStorage.setItem('harvesterUp4', JSON.stringify(harvesterUpIV));
    localStorage.setItem('harvesterUp5', JSON.stringify(harvesterUpV));
    localStorage.setItem('greenhouseUp1', JSON.stringify(greenhouseUpI));
    localStorage.setItem('greenhouseUp2', JSON.stringify(greenhouseUpII));
    localStorage.setItem('greenhouseUp3', JSON.stringify(greenhouseUpIII));
    localStorage.setItem('greenhouseUp4', JSON.stringify(greenhouseUpIV));
    localStorage.setItem('greenhouseUp5', JSON.stringify(greenhouseUpV));
    localStorage.setItem('skyscraperUp1', JSON.stringify(skyscraperUpI));
    localStorage.setItem('skyscraperUp2', JSON.stringify(skyscraperUpII));
    localStorage.setItem('skyscraperUp3', JSON.stringify(skyscraperUpIII));
    localStorage.setItem('skyscraperUp4', JSON.stringify(skyscraperUpIV));
    localStorage.setItem('skyscraperUp5', JSON.stringify(skyscraperUpV));
    localStorage.setItem('bunkerUp1', JSON.stringify(bunkerUpI));
    localStorage.setItem('bunkerUp2', JSON.stringify(bunkerUpII));
    localStorage.setItem('bunkerUp3', JSON.stringify(bunkerUpIII));
    localStorage.setItem('bunkerUp4', JSON.stringify(bunkerUpIV));
    localStorage.setItem('bunkerUp5', JSON.stringify(bunkerUpV));
    localStorage.setItem('replicator1', JSON.stringify(replicatorUpI));
    localStorage.setItem('replicator2', JSON.stringify(replicatorUpII));
    localStorage.setItem('replicator3', JSON.stringify(replicatorUpIII));
    localStorage.setItem('replicator4', JSON.stringify(replicatorUpIV));
    localStorage.setItem('replicator5', JSON.stringify(replicatorUpV));
    localStorage.setItem('planetUp1', JSON.stringify(planetUpI));
    localStorage.setItem('planetUp2', JSON.stringify(planetUpII));
    localStorage.setItem('planetUp3', JSON.stringify(planetUpIII));
    localStorage.setItem('planetUp4', JSON.stringify(planetUpIV));
    localStorage.setItem('planetUp5', JSON.stringify(planetUpV));
    localStorage.setItem('transmutator1', JSON.stringify(transmutatorUpI));
    localStorage.setItem('transmutator2', JSON.stringify(transmutatorUpII));
    localStorage.setItem('transmutator3', JSON.stringify(transmutatorUpIII));
    localStorage.setItem('transmutator4', JSON.stringify(transmutatorUpIV));
    localStorage.setItem('transmutator5', JSON.stringify(transmutatorUpV));
    localStorage.setItem('carrotUp', JSON.stringify(carrotUp));
    localStorage.setItem('potato01Up', JSON.stringify(potato01Up));
    localStorage.setItem('turnipUp', JSON.stringify(turnipUp));
    localStorage.setItem('onionUp', JSON.stringify(onionUp));
    localStorage.setItem('peaUp', JSON.stringify(peaUp));
    localStorage.setItem('soybeanUp', JSON.stringify(soybeanUp));
    localStorage.setItem('tomato01Up', JSON.stringify(tomato01Up));
    localStorage.setItem('tomato02Up', JSON.stringify(tomato02Up));
    localStorage.setItem('lettuceUp', JSON.stringify(lettuceUp));
    localStorage.setItem('wheat01Up', JSON.stringify(wheat01Up));
    localStorage.setItem('wheat02Up', JSON.stringify(wheat02Up));
    localStorage.setItem('milletUp', JSON.stringify(milletUp));
    localStorage.setItem('cucumberUp', JSON.stringify(cucumberUp));
    localStorage.setItem('tomato03Up', JSON.stringify(tomato03Up));
    localStorage.setItem('pepperUp', JSON.stringify(pepperUp));
    localStorage.setItem('eggplantUp', JSON.stringify(eggplantUp));
    localStorage.setItem('sugarcaneUp', JSON.stringify(sugarcaneUp));
    localStorage.setItem('cornUp', JSON.stringify(cornUp));
    localStorage.setItem('garlicUp', JSON.stringify(garlicUp));
    localStorage.setItem('beetUp', JSON.stringify(beetUp));
    localStorage.setItem('potato02Up', JSON.stringify(potato02Up));
    localStorage.setItem('riceUp', JSON.stringify(riceUp));
    localStorage.setItem('sunflowerUp', JSON.stringify(sunflowerUp));
    localStorage.setItem('cassavaUp', JSON.stringify(cassavaUp));
    localStorage.setItem('pumpkinUp', JSON.stringify(pumpkinUp));
    localStorage.setItem("savedJoe", JSON.stringify(numFarmerJoe));
    localStorage.setItem("savedField", JSON.stringify(numField));
    localStorage.setItem("savedHarvester" , JSON.stringify(numHarvester));
    localStorage.setItem("savedGreenhouse", JSON.stringify(numGreenhouse));
    localStorage.setItem("savedSkyscraper", JSON.stringify(numSkyscraper));
    localStorage.setItem("savedBunker", JSON.stringify(numBunkers));
    localStorage.setItem("savedReplicator", JSON.stringify(numReplicator));
    localStorage.setItem("savedPlanet", JSON.stringify(numPlanet));
    localStorage.setItem("savedTransmutator", JSON.stringify(numTransmutator));
    localStorage.setItem("achievement01", JSON.stringify(achievement01));
    localStorage.setItem("achievement02", JSON.stringify(achievement02));
    localStorage.setItem("achievement03", JSON.stringify(achievement03));
    localStorage.setItem("achievement04", JSON.stringify(achievement04));
    localStorage.setItem("achievement05", JSON.stringify(achievement05));
    localStorage.setItem("achievement06", JSON.stringify(achievement06));
    localStorage.setItem("achievement07", JSON.stringify(achievement07));
    localStorage.setItem("achievement08", JSON.stringify(achievement08));
    localStorage.setItem("achievement09", JSON.stringify(achievement09));
    localStorage.setItem("achievement10", JSON.stringify(achievement10));
    localStorage.setItem("achievement11", JSON.stringify(achievement11));
    localStorage.setItem("achievement12", JSON.stringify(achievement12));
    localStorage.setItem("achievement13", JSON.stringify(achievement13));
    localStorage.setItem("achievement14", JSON.stringify(achievement14));
    localStorage.setItem("achievement15", JSON.stringify(achievement15));
    localStorage.setItem("achievement16", JSON.stringify(achievement16));
    localStorage.setItem("achievement17", JSON.stringify(achievement17));
    localStorage.setItem("achievement18", JSON.stringify(achievement18));
    localStorage.setItem("achievement19", JSON.stringify(achievement19));
    localStorage.setItem("achievement20", JSON.stringify(achievement20));
    localStorage.setItem("achievement21", JSON.stringify(achievement21));
    localStorage.setItem("achievement22", JSON.stringify(achievement22));
    localStorage.setItem("achievement23", JSON.stringify(achievement23));
    localStorage.setItem("achievement24", JSON.stringify(achievement24));
    localStorage.setItem("achievement25", JSON.stringify(achievement25));
    localStorage.setItem("achievement26", JSON.stringify(achievement26));
    localStorage.setItem("achievement27", JSON.stringify(achievement27));
    localStorage.setItem("achievement28", JSON.stringify(achievement28));
    localStorage.setItem("achievement29", JSON.stringify(achievement29));
    localStorage.setItem("achievement30", JSON.stringify(achievement30));
    localStorage.setItem("achievement31", JSON.stringify(achievement31));
    localStorage.setItem("achievement32", JSON.stringify(achievement32));
    localStorage.setItem("achievement33", JSON.stringify(achievement33));
    localStorage.setItem("achievement34", JSON.stringify(achievement34));
    localStorage.setItem("achievement35", JSON.stringify(achievement35));
    localStorage.setItem("achievement36", JSON.stringify(achievement36));
    localStorage.setItem("achievement37", JSON.stringify(achievement37));
    localStorage.setItem("achievement38", JSON.stringify(achievement38));
    localStorage.setItem("achievement39", JSON.stringify(achievement39));
    localStorage.setItem("achievement40", JSON.stringify(achievement40));
    localStorage.setItem("achievement41", JSON.stringify(achievement41));
    localStorage.setItem("achievement42", JSON.stringify(achievement42));
    localStorage.setItem("achievement43", JSON.stringify(achievement43));
    localStorage.setItem("achievement44", JSON.stringify(achievement44));
    localStorage.setItem("achievement45", JSON.stringify(achievement45));
    localStorage.setItem("achievement46", JSON.stringify(achievement46));
    localStorage.setItem("achievement47", JSON.stringify(achievement47));
    localStorage.setItem("achievement48", JSON.stringify(achievement48));
    localStorage.setItem("achievement49", JSON.stringify(achievement49));
    localStorage.setItem("achievement50", JSON.stringify(achievement50));
    localStorage.setItem("achievement51", JSON.stringify(achievement51));
    localStorage.setItem("achievement52", JSON.stringify(achievement52));
    localStorage.setItem("achievement53", JSON.stringify(achievement53));
    localStorage.setItem("achievement54", JSON.stringify(achievement54));
    localStorage.setItem("achievement55", JSON.stringify(achievement55));
    localStorage.setItem("achievement56", JSON.stringify(achievement56));
    localStorage.setItem("achievement57", JSON.stringify(achievement57));
    localStorage.setItem("achievement58", JSON.stringify(achievement58));
    localStorage.setItem("achievement59", JSON.stringify(achievement59));
    localStorage.setItem("achievement60", JSON.stringify(achievement60));
    localStorage.setItem("achievement61", JSON.stringify(achievement61));
    localStorage.setItem("achievement62", JSON.stringify(achievement62));
    localStorage.setItem("achievement63", JSON.stringify(achievement63));
    localStorage.setItem("achievement64", JSON.stringify(achievement64));
    localStorage.setItem('nightMode', JSON.stringify(nightMode));
    localStorage.setItem('soundSetting', JSON.stringify(soundSetting));
    saveGameNotif();
}

function deleteSave() {
    localStorage.clear();
    location.reload();
}

function cropclick() {
    crops += clickvalue;
    totalClicks += 1;
    lifetimeCrops += clickvalue;
    cropsByHand += clickvalue;
    if (soundSetting == 0) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
}
function updateCPS() { //use to update cps after every purchase
    prodHelpHand = .1 * helpHandUpI * helpHandUpII * helpHandUpIII * helpHandUpIV * helpHandUpV * helpHandUpVI * helpHandUpVII * helpHandUpVIII * helpHandUpIX * helpHandUpX * helpHandUpXI;
    cropsPerSecBase = (prodHelpHand * numHelpHands) + (prodFarmerJoe * numFarmerJoe) + (prodField * numField) + (prodHarvester * numHarvester) + (prodGreenhouse * numGreenhouse) + (prodSkyscraper * numSkyscraper) + (prodBunker * numBunkers) + (prodReplicator * numReplicator) + (prodPlanet * numPlanet) + ( prodTransmutator * numTransmutator);
    clickvalue = 1 + (clickUp1 * (.01 * cropsPerSecBase)) + (clickUp2 * (.01 * cropsPerSecBase)) + (clickUp3 * (.01 * cropsPerSecBase)) + (clickUp4 * (.01 * cropsPerSecBase)) + (clickUp5 * (.01 * cropsPerSecBase));
    bonusMuliplier = (carrotUp + potato01Up + turnipUp + onionUp + peaUp + soybeanUp + tomato01Up + tomato02Up + lettuceUp + wheat01Up + wheat02Up + milletUp + cucumberUp + tomato03Up + pepperUp + eggplantUp + sugarcaneUp + cornUp + garlicUp + beetUp + potato02Up + riceUp + sunflowerUp + cassavaUp + pumpkinUp);
    cropsPerSecWBonus = cropsPerSecBase * ((bonusMuliplier / 100) + 1);
    totalUpgrades = (helpHandUpI + helpHandUpII + helpHandUpIII + helpHandUpIV + helpHandUpV + helpHandUpVI + helpHandUpVII + helpHandUpVIII + helpHandUpIX + helpHandUpX + helpHandUpXI + clickUp1 + clickUp2 + clickUp3 + clickUp4 + clickUp5 + farmerJoeUpI + farmerJoeUpII + farmerJoeUpIII + farmerJoeUpIV + farmerJoeUpV + fieldUpI + fieldUpII + fieldUpIII + fieldUpIV + fieldUpV + harvesterUpI + harvesterUpII + harvesterUpIII + harvesterUpIV + harvesterUpV + greenhouseUpI + greenhouseUpII + greenhouseUpIII + greenhouseUpIV + greenhouseUpV + skyscraperUpI + skyscraperUpII + skyscraperUpIII + skyscraperUpIV + skyscraperUpV + bunkerUpI + bunkerUpII + bunkerUpIII + bunkerUpIV + bunkerUpV + replicatorUpI + replicatorUpII + replicatorUpIII + replicatorUpIV + replicatorUpV + planetUpI + planetUpII + planetUpIII + planetUpIV + planetUpV + transmutatorUpI + transmutatorUpII + transmutatorUpIII + transmutatorUpIV + transmutatorUpV + totalCropTypes) - 56;
    totalCropTypes = (carrotUp+potato01Up+turnipUp+onionUp+peaUp+soybeanUp+tomato01Up+tomato02Up+lettuceUp+wheat01Up+wheat02Up+(milletUp/2)+(cucumberUp/2)+(tomato03Up/2)+(pepperUp/2)+(eggplantUp/2)+(sugarcaneUp/2)+(cornUp/2)+(garlicUp/2)+(beetUp/2)+(potato02Up/5)+(riceUp/5)+(sunflowerUp/5)+(cassavaUp/5)+(pumpkinUp/5));
    document.getElementById("cps").innerHTML = commaForm.format(parseFloat(cropsPerSecWBonus.toFixed(1))) + " cps";
    document.getElementById("totalUpgrades1").innerHTML = totalUpgrades;
}
function updateStats() {
    totalBuildings = (numHelpHands + numFarmerJoe + numField + numHarvester + numGreenhouse + numSkyscraper + numBunkers + numReplicator + numPlanet + numTransmutator);
    totalUpgrades = (helpHandUpI + helpHandUpII + helpHandUpIII + helpHandUpIV + helpHandUpV + helpHandUpVI + helpHandUpVII + helpHandUpVIII + helpHandUpIX + helpHandUpX + helpHandUpXI + clickUp1 + clickUp2 + clickUp3 + clickUp4 + clickUp5 + farmerJoeUpI + farmerJoeUpII + farmerJoeUpIII + farmerJoeUpIV + farmerJoeUpV + fieldUpI + fieldUpII + fieldUpIII + fieldUpIV + fieldUpV + harvesterUpI + harvesterUpII + harvesterUpIII + harvesterUpIV + harvesterUpV + greenhouseUpI + greenhouseUpII + greenhouseUpIII + greenhouseUpIV + greenhouseUpV + skyscraperUpI + skyscraperUpII + skyscraperUpIII + skyscraperUpIV + skyscraperUpV + bunkerUpI + bunkerUpII + bunkerUpIII + bunkerUpIV + bunkerUpV + replicatorUpI + replicatorUpII + replicatorUpIII + replicatorUpIV + replicatorUpV + planetUpI + planetUpII + planetUpIII + planetUpIV + planetUpV + transmutatorUpI + transmutatorUpII + transmutatorUpIII + transmutatorUpIV + transmutatorUpV + totalCropTypes) - 56;

    document.getElementById("lifetimeclicks").innerHTML = totalClicks;
    document.getElementById("totalcropharvest").innerHTML = commaForm.format(Math.round(lifetimeCrops));
    document.getElementById("totalbuildings").innerHTML = totalBuildings;
    document.getElementById("totalUpgrades1").innerHTML = totalUpgrades;
    document.getElementById("totalUpgrades2").innerHTML = totalUpgrades;
    document.getElementById('cropsByHand').innerHTML = commaForm.format(cropsByHand.toFixed(1));
    document.getElementById('clickingPower').innerHTML = clickvalue.toFixed(1);
    document.getElementById('baseCps').innerHTML = commaForm.format(Math.round(cropsPerSecBase));
    document.getElementById('bonusMultiplier').innerHTML = bonusMuliplier;
    document.getElementById('startDate').innerHTML = editFarmStart;
}
function leftmenu() { //collapes and expands menus
    const leftmenu = document.getElementById("leftbar");
    const leftarrow = document.getElementById("leftmenuarrow");
    if (leftmenu.classList.contains("hidden")) {
        leftmenu.classList.remove("hidden");
        leftmenu.style.display = "block";
        leftarrow.src = "images/arrowleft.png";
        leftarrow.style.left = "27%";
    } else {
        leftmenu.classList.add("hidden");
        leftmenu.style.display = "none";
        leftarrow.src = "images/arrowright.png";
        leftarrow.style.left = "1%";
    }
}
function rightmenu() {
    const rightmenu = document.getElementById("rightbar");
    const rightarrow = document.getElementById("rightmenuarrow");
    if (rightmenu.classList.contains("hidden")) {
        rightmenu.classList.remove("hidden");
        rightmenu.style.display = "block";
        rightarrow.src = "images/arrowright.png";
        rightarrow.style.left = "67.5%";
    } else {
        rightmenu.classList.add("hidden");
        rightmenu.style.display = "none";
        rightarrow.src = "images/arrowleft.png";
        rightarrow.style.left = "95%";
    }
}

function buyBuilding(type) { //building store
    if (type === 'hand') {
        numHelpHands += 1;
        crops -= costHelpHand;
        costHelpHand = Math.round(15 * buildingCostInc ** numHelpHands);
        document.getElementById("countHelpHand").innerHTML = numHelpHands;
        document.getElementById("helpHandCost").innerHTML = commaForm.format(costHelpHand);
    } else if (type === 'joe') {
        numFarmerJoe += 1;
        crops -= costFarmerJoe;
        costFarmerJoe = Math.round(250 * buildingCostInc ** numFarmerJoe);
        document.getElementById("countFarmerJoe").innerHTML = numFarmerJoe;
        document.getElementById("farmerJoeCost").innerHTML = commaForm.format(costFarmerJoe);
    } else if (type === 'field') {
        numField += 1;
        crops -= costField;
        costField = Math.round(2500 * buildingCostInc ** numField);
        document.getElementById("countField").innerHTML = numField;
        document.getElementById("fieldCost").innerHTML = commaForm.format(costField);
    } else if (type === 'harvester') {
        numHarvester += 1;
        crops -= costHarvester;
        costHarvester = Math.round(25000 * buildingCostInc ** numHarvester);
        document.getElementById("countHarvester").innerHTML = numHarvester;
        document.getElementById("harvesterCost").innerHTML = commaForm.format(costHarvester);
    } else if (type === 'greenhouse') {
        numGreenhouse += 1;
        crops -= costGreenhouse;
        costGreenhouse = Math.round(250000 * buildingCostInc ** numGreenhouse);
        document.getElementById("countGreenhouse").innerHTML = numGreenhouse;
        document.getElementById("greenhouseCost").innerHTML = commaForm.format(costGreenhouse);
    } else if (type === 'skyscraper') {
        numSkyscraper += 1;
        crops -= costSkyscraper;
        costSkyscraper = Math.round(2500000 * buildingCostInc ** numSkyscraper);
        document.getElementById("countSkyscraper").innerHTML = numSkyscraper;
        document.getElementById("skyscraperCost").innerHTML = commaForm.format(costSkyscraper);
    } else if (type === 'bunker') {
        numBunkers += 1;
        crops -= costBunkers;
        costBunkers = Math.round(25000000 * buildingCostInc ** numBunkers);
        document.getElementById("countBunker").innerHTML = numBunkers;
        document.getElementById("bunkerCost").innerHTML = commaForm.format(costBunkers);
    } else if (type === 'replicator') {
        numReplicator += 1;
        crops -= costReplicator;
        costReplicator = Math.round(250000000 * buildingCostInc ** numReplicator);
        document.getElementById("countReplicator").innerHTML = numReplicator;
        document.getElementById("replicatorCost").innerHTML = commaForm.format(costReplicator);
    } else if (type === 'planet') {
        numPlanet +=1;
        crops -= costPlanet;
        costPlanet = Math.round(25000000000 * buildingCostInc ** numPlanet);
        document.getElementById("countPlanet").innerHTML = numPlanet;
        document.getElementById("planetCost").innerHTML = commaForm.format(costPlanet);
    } else if (type === 'transmutator') {
        numTransmutator += 1;
        crops -= costTransmutator;
        costTransmutator = Math.round(250000000000 * buildingCostInc ** numTransmutator);
        document.getElementById("countTransmutator").innerHTML = numTransmutator;
        document.getElementById("transmutatorCost").innerHTML = commaForm.format(costTransmutator);
    }
    updateCPS();
    upgradeCheck();
}

function upgradeCheck() { //blocks upgrades from showing if you dont have enough buildings
    if (numHelpHands >= 5) {
        document.getElementById("helphandI").classList.remove("unavailable");
    }
    if (numHelpHands >= 10) {
        document.getElementById('helphandII').classList.remove('unavailable');
    }
    if (numHelpHands >= 25) {
        document.getElementById('helphandIII').classList.remove('unavailable');
    }
    if (numHelpHands >= 50) {
        document.getElementById('helphandIV').classList.remove('unavailable');
    }
    if (numHelpHands >= 100) {
        document.getElementById('helphandV').classList.remove('unavailable');
    }
    if (numHelpHands >= 150) {
        document.getElementById('helphandVI').classList.remove('unavailable');
    }
    if (numHelpHands >= 200) {
        document.getElementById('helphandVII').classList.remove('unavailable');
    }
    if (numHelpHands >= 250) {
        document.getElementById('helphandVIII').classList.remove('unavailable');
    }
    if (numHelpHands >= 300) {
        document.getElementById('helphandIX').classList.remove('unavailable');
    }
    if (numHelpHands >= 350) {
        document.getElementById('helphandX').classList.remove('unavailable');
    }
    if (numHelpHands >= 400) {
        document.getElementById('helphandXI').classList.remove('unavailable');
    }
    if (numHelpHands >= 5 && cropsByHand >= 250) {
        document.getElementById('clicking1').classList.remove('unavailable');
    }
    if (numHelpHands >= 15 && cropsByHand >= 1250) {
        document.getElementById('clicking2').classList.remove('unavailable');
    }
    if (numHelpHands >= 35 && cropsByHand >= 25000) {
        document.getElementById('clicking3').classList.remove('unavailable');
    }
    if (numHelpHands >= 65 && cropsByHand >= 25000) {
        document.getElementById('clicking4').classList.remove('unavailable');
    }
    if (numHelpHands >= 100 && cropsByHand >= 25000) {
        document.getElementById('clicking5').classList.remove('unavailable');
    }
    if (numFarmerJoe >= 5) {
        document.getElementById('farmerjoeI').classList.remove("unavailable");
    }
    if (numFarmerJoe >= 10) {
        document.getElementById('farmerjoeII').classList.remove('unavailable');
    }
    if (numFarmerJoe >= 25) {
        document.getElementById('farmerjoeIII').classList.remove('unavailable');
    }
    if (numFarmerJoe >= 50) {
        document.getElementById('farmerjoeIV').classList.remove('unavailable');
    }
    if (numFarmerJoe >= 100) {
        document.getElementById('farmerjoeV').classList.remove('unavailable');
    }
    if (numField >= 5) {
        document.getElementById('fieldI').classList.remove('unavailable');
    }
    if (numField >= 10) {
        document.getElementById('fieldII').classList.remove('unavailable');
    }
    if (numField >= 25) {
        document.getElementById('fieldIII').classList.remove('unavailable');
    }
    if (numField >= 50) {
        document.getElementById('fieldIV').classList.remove('unavailable');
    }
    if (numField >= 100) {
        document.getElementById('fieldV').classList.remove('unavailable');
    }
    if (numHarvester >= 5) {
        upgradeIcon[26].classList.remove('unavailable');
    }
    if (numHarvester >= 10) {
        upgradeIcon[27].classList.remove('unavailable');
    }
    if (numHarvester >= 25) {
        upgradeIcon[28].classList.remove('unavailable');
    }
    if (numHarvester >= 50) {
        upgradeIcon[29].classList.remove('unavailable');
    }
    if (numHarvester >= 100) {
        upgradeIcon[30].classList.remove('unavailable');
    }
    if (numGreenhouse >= 5) {
        upgradeIcon[31].classList.remove('unavailable');
    }
    if (numGreenhouse >= 10) {
        upgradeIcon[32].classList.remove('unavailable');
    }
    if (numGreenhouse >= 25) {
        upgradeIcon[33].classList.remove('unavailable');
    }
    if (numGreenhouse >= 50) {
        upgradeIcon[34].classList.remove('unavailable');
    }
    if (numGreenhouse >= 100) {
        upgradeIcon[35].classList.remove('unavailable');
    }
    if (numSkyscraper >= 5) {
        upgradeIcon[36].classList.remove('unavailable');
    }
    if (numSkyscraper >= 10) {
        upgradeIcon[37].classList.remove('unavailable');
    }
    if (numSkyscraper >= 25) {
        upgradeIcon[38].classList.remove('unavailable');
    }
    if (numSkyscraper >= 50) {
        upgradeIcon[39].classList.remove('unavailable');
    }
    if (numSkyscraper >= 100) {
        upgradeIcon[40].classList.remove('unavailable');
    }
    if (numBunkers >= 5) {
        upgradeIcon[41].classList.remove('unavailable');
    }
    if (numBunkers >= 10) {
        upgradeIcon[42].classList.remove('unavailable');
    }
    if (numBunkers >= 25) {
        upgradeIcon[43].classList.remove('unavailable');
    }
    if (numBunkers >= 50) {
        upgradeIcon[44].classList.remove('unavailable');
    }
    if (numBunkers >= 100) {
        upgradeIcon[45].classList.remove('unavailable');
    }
    if (numReplicator >= 5) {
        upgradeIcon[46].classList.remove('unavailable');
    }
    if (numReplicator >= 10) {
        upgradeIcon[47].classList.remove('unavailable');
    }
    if (numReplicator >= 25) {
        upgradeIcon[48].classList.remove('unavailable');
    }
    if (numReplicator >= 50) {
        upgradeIcon[49].classList.remove('unavailable');
    }
    if (numReplicator >= 100) {
        upgradeIcon[50].classList.remove('unavailable');
    }
    if (numPlanet >= 5) {
        upgradeIcon[51].classList.remove('unavailable');
    }
    if (numPlanet >= 10) {
        upgradeIcon[52].classList.remove('unavailable');
    }
    if (numPlanet >= 25) {
        upgradeIcon[53].classList.remove('unavailable');
    }
    if (numPlanet >= 50) {
        upgradeIcon[54].classList.remove('unavailable');
    }
    if (numPlanet >= 100) {
        upgradeIcon[55].classList.remove('unavailable');
    }
    if (numTransmutator >= 5) {
        upgradeIcon[56].classList.remove('unavailable');
    }
    if (numTransmutator >= 10) {
        upgradeIcon[57].classList.remove('unavailable');
    }
    if (numTransmutator >= 25) {
        upgradeIcon[58].classList.remove('unavailable');
    }
    if (numTransmutator >= 50) {
        upgradeIcon[59].classList.remove('unavailable');
    }
    if (numTransmutator >= 100) {
        upgradeIcon[60].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 25000) {
        upgradeIcon[61].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 25000) {
        upgradeIcon[67].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 25000) {
        upgradeIcon[70].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 500000) {
        upgradeIcon[65].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 500000) {
        upgradeIcon[62].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 750000) {
        upgradeIcon[66].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 750000) {
        upgradeIcon[69].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 2500000) {
        upgradeIcon[71].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 2500000) {
        upgradeIcon[78].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 5000000) {
        upgradeIcon[63].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 10000000) {
        upgradeIcon[64].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 10000000) {
        upgradeIcon[73].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 25000000) {
        upgradeIcon[68].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 50000000) {
        upgradeIcon[72].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 75000000) {
        upgradeIcon[80].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 100000000) {
        upgradeIcon[76].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 250000000) {
        upgradeIcon[75].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 750000000) {
        upgradeIcon[77].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 500000000) {
        upgradeIcon[81].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 2500000000) {
        upgradeIcon[79].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 7500000000) {
        upgradeIcon[74].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 10000000000) {
        upgradeIcon[82].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 50000000000) {
        upgradeIcon[85].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 250000000000) {
        upgradeIcon[84].classList.remove('unavailable');
    }
    if (lifetimeCrops >= 1000000000000) {
        upgradeIcon[83].classList.remove('unavailable');
    }
}


function purchUpgrade(name, idtag) {
    if (name === 'hand1' && helpHandUpI == 2){
        alreadyPurchased();
    } else if (name === 'hand1' && crops >= 100) {
        crops -= 100;
        helpHandUpI += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand1' && crops < 100) {insufficientCrop();}
    if (name === 'hand2' && helpHandUpII == 2) {
        alreadyPurchased();
    } else if (name === 'hand2' && crops >= 500) {
        crops -= 500;
        helpHandUpII += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand2' && crops < 500) {insufficientCrop();}
    if (name === 'hand3' && helpHandUpIII == 2) {
        alreadyPurchased();
    } else if (name === 'hand3' && crops >= 3000) {
        crops -= 3000;
        helpHandUpIII += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand3' && crops < 3000) {insufficientCrop();}
    if (name === 'hand4' && helpHandUpIV == 2) {
        alreadyPurchased();
    } else if (name === 'hand4' && crops >= 100000) {
        crops -= 100000;
        helpHandUpIV += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand4' && crops < 100000) {insufficientCrop();}
    if (name === 'hand5' && helpHandUpV == 2) {
        alreadyPurchased();
    } else if (name === 'hand5' && crops >= 100000000) {
        crops -= 100000000;
        helpHandUpV += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand5' && crops < 100000000) {insufficientCrop();}
    if (name === 'hand6' && helpHandUpVI == 2) {
        alreadyPurchased();
    } else if (name === 'hand6' && crops >= 200000000000) {
        crops -= 200000000000;
        helpHandUpVI += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand6' && crops < 200000000000) {insufficientCrop();}
    if (name === 'hand7' && helpHandUpVII == 2) {
        alreadyPurchased();
    } else if (name === 'hand7' && crops >= 250000000000000) {
        crops -= 250000000000000;
        helpHandUpVII += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand7' && crops < 250000000000000) {insufficientCrop();}
    if (name === 'hand8' && helpHandUpVIII == 2) {
        alreadyPurchased();
    } else if (name === 'hand8' && crops >= 100000000000000) {
        crops -= 100000000000000;
        helpHandUpVIII += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand8' && crops < 100000000000000) {insufficientCrop();}
    if (name === 'hand9' && helpHandUpIX == 2) {
        alreadyPurchased();
    } else if (name === 'hand9' && crops >= 1000000000000000) {
        crops -= 1000000000000000;
        helpHandUpIX += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand9' && crops < 1000000000000000) {insufficientCrop();}
    if (name === 'hand10' && helpHandUpX == 2) {
        alreadyPurchased();
    } else if (name === 'hand10' && crops >= 100000000000000000) {
        crops -= 100000000000000000;
        helpHandUpX += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand10' && crops < 100000000000000000) {insufficientCrop();}
    if (name === 'hand11' && helpHandUpXI == 2) {
        alreadyPurchased();
    } else if (name === 'hand11' && crops >= 1000000000000000000) {
        crops -= 1000000000000000000;
        helpHandUpXI += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'hand11' && crops < 1000000000000000000) {insufficientCrop();}
    if (name === 'click1' && clickUp1 == 1) {
        alreadyPurchased();
    } else if (name === 'click1' && crops > 1000) {
        crops -= 1000;
        clickUp1 += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'click1' && crops < 1000) {insufficientCrop();}
    if (name === 'click2' && clickUp2 == 1) {
        alreadyPurchased();
    } else if (name === 'click2' && crops > 15000) {
        crops -= 15000;
        clickUp2 += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'click2' && crops < 15000) {insufficientCrop();}
    if (name === 'click3' && clickUp3 == 1) {
        alreadyPurchased();
    } else if (name === 'click3' && crops > 150000) {
        crops -= 150000;
        clickUp3 += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'click3' && crops < 150000) {insufficientCrop();}
    if (name === 'click4' && clickUp4 == 1) {
        alreadyPurchased();
    } else if (name === 'click4' && crops > 1000000) {
        crops -= 1000000;
        clickUp4 += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'click4' && crops < 1000000) {insufficientCrop();}
    if (name === 'click5' && clickUp5 == 1) {
        alreadyPurchased();
    } else if (name === 'click5' && crops > 25000000) {
        crops -= 25000000;
        clickUp5 += 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'click5' && crops < 25000000) {insufficientCrop();}
    if (name === 'joe1' && farmerJoeUpI == 2) {
        alreadyPurchased();
    } else if (name === 'joe1' && crops >= 5000) {
        crops -= 5000;
        farmerJoeUpI += 1;
        prodFarmerJoe = 2 * farmerJoeUpI * farmerJoeUpII * farmerJoeUpIII * farmerJoeUpIV * farmerJoeUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'joe1' && crops < 5000) {insufficientCrop();}
    if (name === 'joe2' && farmerJoeUpII == 2) {
        alreadyPurchased();
    } else if (name === 'joe2' && crops >= 15000) {
        crops -= 15000;
        farmerJoeUpII += 1;
        prodFarmerJoe = 2 * farmerJoeUpI * farmerJoeUpII * farmerJoeUpIII * farmerJoeUpIV * farmerJoeUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'joe2' && crops < 15000) {insufficientCrop();}
    if (name === 'joe3' && farmerJoeUpIII == 2) {
        alreadyPurchased();
    } else if (name === 'joe3' && crops >= 75000) {
        crops -= 75000;
        farmerJoeUpIII += 1;
        prodFarmerJoe = 2 * farmerJoeUpI * farmerJoeUpII * farmerJoeUpIII * farmerJoeUpIV * farmerJoeUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'joe3' && crops < 75000) {insufficientCrop();}
    if (name === 'joe4' && farmerJoeUpIV == 2) {
        alreadyPurchased();
    } else if (name === 'joe4' && crops >= 3000000) {
        crops -= 3000000;
        farmerJoeUpIV += 1;
        prodFarmerJoe = 2 * farmerJoeUpI * farmerJoeUpII * farmerJoeUpIII * farmerJoeUpIV * farmerJoeUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'joe4' && crops < 3000000) {insufficientCrop();}
    if (name === 'joe5' && farmerJoeUpV == 2) {
        alreadyPurchased();
    } else if (name === 'joe5' && crops >= 3500000000) {
        crops -= 3500000000;
        farmerJoeUpV += 1;
        prodFarmerJoe = 2 * farmerJoeUpI * farmerJoeUpII * farmerJoeUpIII * farmerJoeUpIV * farmerJoeUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'joe5' && crops < 3500000000) {insufficientCrop();}
    if (name === 'field1' && fieldUpI == 2) {
        alreadyPurchased();
    } else if (name === 'field1' && crops >= 60000) {
        crops -= 60000;
        fieldUpI += 1;
        prodField = 10 * fieldUpI * fieldUpII * fieldUpIII * fieldUpIV * fieldUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'field1' && crops < 60000) {insufficientCrop();}
    if (name === 'field2' && fieldUpII == 2) {
        alreadyPurchased();
    } else if (name === 'field2' && crops >= 110000) {
        crops -= 110000;
        fieldUpII += 1;
        prodField = 10 * fieldUpI * fieldUpII * fieldUpIII * fieldUpIV * fieldUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'field2' && crops < 110000) {insufficientCrop();}
    if (name === 'field3' && fieldUpIII == 2) {
        alreadyPurchased();
    } else if (name === 'field3' && crops >= 750000) {
        crops -= 750000;
        fieldUpIII += 1;
        prodField = 10 * fieldUpI * fieldUpII * fieldUpIII * fieldUpIV * fieldUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'field3' && crops < 750000) {insufficientCrop();}
    if (name === 'field4' && fieldUpIV == 2) {
        alreadyPurchased();
    } else if (name === 'field4' && crops >= 2750000) {
        crops -= 2750000;
        fieldUpIV += 1;
        prodField = 10 * fieldUpI * fieldUpII * fieldUpIII * fieldUpIV * fieldUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'field4' && crops < 2750000) {insufficientCrop();}
    if (name === 'field5' && fieldUpV == 2) {
        alreadyPurchased();
    } else if (name === 'field5' && crops >= 3000000000) {
        crops -= 3000000000;
        fieldUpV += 1;
        prodField = 10 * fieldUpI * fieldUpII * fieldUpIII * fieldUpIV * fieldUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'field5' && crops < 3000000000) {insufficientCrop();}
    if (name === 'harvester1' && harvesterUpI == 2) {
        alreadyPurchased();
    } else if (name === 'harvester1' && crops >= 500000) {
        crops -= 500000;
        harvesterUpI += 1;
        prodHarvester = 50 * harvesterUpI * harvesterUpII * harvesterUpIII * harvesterUpIV * harvesterUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'harvester1' && crops < 500000) {insufficientCrop();}
    if (name === 'harvester2' && harvesterUpII == 2) {
        alreadyPurchased();
    } else if (name === 'harvester2' && crops >= 1000000) {
        crops -= 1000000;
        harvesterUpII += 1;
        prodHarvester = 50 * harvesterUpI * harvesterUpII * harvesterUpIII * harvesterUpIV * harvesterUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'harvester2' && crops < 1000000) {insufficientCrop();}
    if (name === 'harvester3' && harvesterUpIII == 2) {
        alreadyPurchased();
    } else if (name === 'harvester3' && crops >= 7250000) {
        crops -= 7250000;
        harvesterUpIII += 1;
        prodHarvester = 50 * harvesterUpI * harvesterUpII * harvesterUpIII * harvesterUpIV * harvesterUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'harvester3' && crops < 7250000) {insufficientCrop();}
    if (name === 'harvester4' && harvesterUpIV == 2) {
        alreadyPurchased();
    } else if (name === 'harvester4' && crops >= 250000000) {
        crops -= 250000000;
        harvesterUpIV += 1;
        prodHarvester = 50 * harvesterUpI * harvesterUpII * harvesterUpIII * harvesterUpIV * harvesterUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'harvester4' && crops < 250000000) {insufficientCrop();}
    if (name === 'harvester5' && harvesterUpV == 2) {
        alreadyPurchased();
    } else if (name === 'harvester5' && crops >= 275000000000) {
        crops -= 275000000000;
        harvesterUpV += 1;
        prodHarvester = 50 * harvesterUpI * harvesterUpII * harvesterUpIII * harvesterUpIV * harvesterUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'harvester5' && crops < 275000000000) {insufficientCrop();}
    if (name === 'greenhouse1' && greenhouseUpI ==2) {
        alreadyPurchased();
    } else if (name === 'greenhouse1' && crops >= 5000000) {
        crops -= 5000000;
        greenhouseUpI += 1;
        prodGreenhouse = 250 * greenhouseUpI * greenhouseUpII * greenhouseUpIII * greenhouseUpIV * greenhouseUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'greenhouse1' && crops < 5000000) {insufficientCrop();}
    if (name === 'greenhouse2' && greenhouseUpII ==2) {
        alreadyPurchased();
    } else if (name === 'greenhouse2' && crops >= 10000000) {
        crops -= 10000000;
        greenhouseUpII += 1;
        prodGreenhouse = 250 * greenhouseUpI * greenhouseUpII * greenhouseUpIII * greenhouseUpIV * greenhouseUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'greenhouse2' && crops < 10000000) {insufficientCrop();}
    if (name === 'greenhouse3' && greenhouseUpIII ==2) {
        alreadyPurchased();
    } else if (name === 'greenhouse3' && crops >= 75000000) {
        crops -= 75000000;
        greenhouseUpIII += 1;
        prodGreenhouse = 250 * greenhouseUpI * greenhouseUpII * greenhouseUpIII * greenhouseUpIV * greenhouseUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'greenhouse3' && crops < 75000000) {insufficientCrop();}
    if (name === 'greenhouse4' && greenhouseUpIV ==2) {
        alreadyPurchased();
    } else if (name === 'greenhouse4' && crops >= 2750000000) {
        crops -= 2750000000;
        greenhouseUpIV += 1;
        prodGreenhouse = 250 * greenhouseUpI * greenhouseUpII * greenhouseUpIII * greenhouseUpIV * greenhouseUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'greenhouse4' && crops < 2750000000) {insufficientCrop();}
    if (name === 'greenhouse5' && greenhouseUpV ==2) {
        alreadyPurchased();
    } else if (name === 'greenhouse5' && crops >= 3000000000000) {
        crops -= 3000000000000;
        greenhouseUpV += 1;
        prodGreenhouse = 250 * greenhouseUpI * greenhouseUpII * greenhouseUpIII * greenhouseUpIV * greenhouseUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'greenhouse5' && crops < 3000000000000) {insufficientCrop();}
    if (name === 'skyscraper1' && skyscraperUpI ==2) {
        alreadyPurchased();
    } else if (name === 'skyscraper1' && crops >= 50000000) {
        crops -= 50000000;
        skyscraperUpI += 1;
        prodSkyscraper = 1250 * skyscraperUpI * skyscraperUpII * skyscraperUpIII * skyscraperUpIV * skyscraperUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'skyscraper1' && crops < 50000000) {insufficientCrop();}
    if (name === 'skyscraper2' && skyscraperUpII ==2) {
        alreadyPurchased();
    } else if (name === 'skyscraper2' && crops >= 100000000) {
        crops -= 100000000;
        skyscraperUpII += 1;
        prodSkyscraper = 1250 * skyscraperUpI * skyscraperUpII * skyscraperUpIII * skyscraperUpIV * skyscraperUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'skyscraper2' && crops < 100000000) {insufficientCrop();}
    if (name === 'skyscraper3' && skyscraperUpIII ==2) {
        alreadyPurchased();
    } else if (name === 'skyscraper3' && crops >= 800000000) {
        crops -= 800000000;
        skyscraperUpIII += 1;
        prodSkyscraper = 1250 * skyscraperUpI * skyscraperUpII * skyscraperUpIII * skyscraperUpIV * skyscraperUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'skyscraper3' && crops < 800000000) {insufficientCrop();}
    if (name === 'skyscraper4' && skyscraperUpIV ==2) {
        alreadyPurchased();
    } else if (name === 'skyscraper4' && crops >= 27500000000) {
        crops -= 27500000000;
        skyscraperUpIV += 1;
        prodSkyscraper = 1250 * skyscraperUpI * skyscraperUpII * skyscraperUpIII * skyscraperUpIV * skyscraperUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'skyscraper4' && crops < 27500000000) {insufficientCrop();}
    if (name === 'skyscraper5' && skyscraperUpV ==2) {
        alreadyPurchased();
    } else if (name === 'skyscraper5' && crops >= 30000000000000) {
        crops -= 30000000000000;
        skyscraperUpV += 1;
        prodSkyscraper = 1250 * skyscraperUpI * skyscraperUpII * skyscraperUpIII * skyscraperUpIV * skyscraperUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'skyscraper5' && crops < 30000000000000) {insufficientCrop();}
    if (name === 'bunker1' && bunkerUpI ==2) {
        alreadyPurchased();
    } else if (name === 'bunker1' && crops >= 575000000) {
        crops -= 575000000;
        bunkerUpI += 1;
        prodBunker = 6250 * bunkerUpI * bunkerUpII * bunkerUpIII * bunkerUpIV * bunkerUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'bunker1' && crops < 575000000) {insufficientCrop();}
    if (name === 'bunker2' && bunkerUpII ==2) {
        alreadyPurchased();
    } else if (name === 'bunker2' && crops >= 1000000000) {
        crops -= 1000000000;
        bunkerUpII += 1;
        prodBunker = 6250 * bunkerUpI * bunkerUpII * bunkerUpIII * bunkerUpIV * bunkerUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'bunker2' && crops < 1000000000) {insufficientCrop();}
    if (name === 'bunker3' && bunkerUpIII ==2) {
        alreadyPurchased();
    } else if (name === 'bunker3' && crops >= 8250000000) {
        crops -= 8250000000;
        bunkerUpIII += 1;
        prodBunker = 6250 * bunkerUpI * bunkerUpII * bunkerUpIII * bunkerUpIV * bunkerUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'bunker3' && crops < 8250000000) {insufficientCrop();}
    if (name === 'bunker4' && bunkerUpIV ==2) {
        alreadyPurchased();
    } else if (name === 'bunker4' && crops >= 275000000000) {
        crops -= 275000000000;
        bunkerUpIV += 1;
        prodBunker = 6250 * bunkerUpI * bunkerUpII * bunkerUpIII * bunkerUpIV * bunkerUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'bunker4' && crops < 275000000000) {insufficientCrop();}
    if (name === 'bunker5' && bunkerUpV ==2) {
        alreadyPurchased();
    } else if (name === 'bunker5' && crops >= 300000000000000) {
        crops -= 300000000000000;
        bunkerUpV += 1;
        prodBunker = 6250 * bunkerUpI * bunkerUpII * bunkerUpIII * bunkerUpIV * bunkerUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'bunker5' && crops < 300000000000000) {insufficientCrop();}
    if (name === 'replicator1' && replicatorUpI ==2) {
        alreadyPurchased();
    } else if (name === 'replicator1' && crops >= 5000000000) {
        crops -= 5000000000;
        replicatorUpI += 1;
        prodReplicator = 31250 * replicatorUpI * replicatorUpII * replicatorUpIII * replicatorUpIV * replicatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'replicator1' && crops < 5000000000) {insufficientCrop();}
    if (name === 'replicator2' && replicatorUpII ==2) {
        alreadyPurchased();
    } else if (name === 'replicator2' && crops >= 12000000000) {
        crops -= 12000000000;
        replicatorUpII += 1;
        prodReplicator = 31250 * replicatorUpI * replicatorUpII * replicatorUpIII * replicatorUpIV * replicatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'replicator2' && crops < 12000000000) {insufficientCrop();}
    if (name === 'replicator3' && replicatorUpIII ==2) {
        alreadyPurchased();
    } else if (name === 'replicator3' && crops >= 80000000000) {
        crops -= 80000000000;
        replicatorUpIII += 1;
        prodReplicator = 31250 * replicatorUpI * replicatorUpII * replicatorUpIII * replicatorUpIV * replicatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'replicator3' && crops < 80000000000) {insufficientCrop();}
    if (name === 'replicator4' && replicatorUpIV ==2) {
        alreadyPurchased();
    } else if (name === 'replicator4' && crops >= 2725000000000) {
        crops -= 2725000000000;
        replicatorUpIV += 1;
        prodReplicator = 31250 * replicatorUpI * replicatorUpII * replicatorUpIII * replicatorUpIV * replicatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'replicator4' && crops < 2725000000000) {insufficientCrop();}
    if (name === 'replicator5' && replicatorUpV ==2) {
        alreadyPurchased();
    } else if (name === 'replicator5' && crops >= 3500000000000000) {
        crops -= 3500000000000000;
        replicatorUpV += 1;
        prodReplicator = 31250 * replicatorUpI * replicatorUpII * replicatorUpIII * replicatorUpIV * replicatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'replicator5' && crops < 3500000000000000) {insufficientCrop();}
    if (name === 'planet1' && planetUpI ==2) {
        alreadyPurchased();
    } else if (name === 'planet1' && crops >= 500000000000) {
        crops -= 500000000000;
        planetUpI += 1;
        prodPlanet = 156250 * planetUpI * planetUpII * planetUpIII * planetUpIV * planetUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'planet1' && crops < 500000000000) {insufficientCrop();}
    if (name === 'planet2' && planetUpII ==2) {
        alreadyPurchased();
    } else if (name === 'planet2' && crops >= 1000000000000) {
        crops -= 1000000000000;
        planetUpII += 1;
        prodPlanet = 156250 * planetUpI * planetUpII * planetUpIII * planetUpIV * planetUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'planet2' && crops < 1000000000000) {insufficientCrop();}
    if (name === 'planet3' && planetUpIII ==2) {
        alreadyPurchased();
    } else if (name === 'planet3' && crops >= 8250000000000) {
        crops -= 8250000000000;
        planetUpIII += 1;
        prodPlanet = 156250 * planetUpI * planetUpII * planetUpIII * planetUpIV * planetUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'planet3' && crops < 8250000000000) {insufficientCrop();}
    if (name === 'planet4' && planetUpIV ==2) {
        alreadyPurchased();
    } else if (name === 'planet4' && crops >= 275000000000000) {
        crops -= 275000000000000;
        planetUpIV += 1;
        prodPlanet = 156250 * planetUpI * planetUpII * planetUpIII * planetUpIV * planetUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'planet4' && crops < 275000000000000) {insufficientCrop();}
    if (name === 'planet5' && planetUpV ==2) {
        alreadyPurchased();
    } else if (name === 'planet5' && crops >= 300000000000000000) {
        crops -= 300000000000000000;
        planetUpV += 1;
        prodPlanet = 156250 * planetUpI * planetUpII * planetUpIII * planetUpIV * planetUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'planet5' && crops < 300000000000000000) {insufficientCrop();}
    if (name === 'transmutator1' && transmutatorUpI ==2) {
        alreadyPurchased();
    } else if (name === 'transmutator1' && crops >= 5000000000000) {
        crops -= 5000000000000;
        transmutatorUpI += 1;
        prodTransmutator = 781250 * transmutatorUpI * transmutatorUpII * transmutatorUpIII * transmutatorUpIV * transmutatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'transmutator1' && crops < 5000000000000) {insufficientCrop();}
    if (name === 'transmutator2' && transmutatorUpII ==2) {
        alreadyPurchased();
    } else if (name === 'transmutator2' && crops >= 10000000000000) {
        crops -= 10000000000000;
        transmutatorUpII += 1;
        prodTransmutator = 781250 * transmutatorUpI * transmutatorUpII * transmutatorUpIII * transmutatorUpIV * transmutatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'transmutator2' && crops < 10000000000000) {insufficientCrop();}
    if (name === 'transmutator3' && transmutatorUpIII ==2) {
        alreadyPurchased();
    } else if (name === 'transmutator3' && crops >= 75000000000000) {
        crops -= 75000000000000;
        transmutatorUpIII += 1;
        prodTransmutator = 781250 * transmutatorUpI * transmutatorUpII * transmutatorUpIII * transmutatorUpIV * transmutatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'transmutator3' && crops < 75000000000000) {insufficientCrop();}
    if (name === 'transmutator4' && transmutatorUpIV ==2) {
        alreadyPurchased();
    } else if (name === 'transmutator4' && crops >= 2500000000000000) {
        crops -= 2500000000000000;
        transmutatorUpIV += 1;
        prodTransmutator = 781250 * transmutatorUpI * transmutatorUpII * transmutatorUpIII * transmutatorUpIV * transmutatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'transmutator4' && crops < 2500000000000000) {insufficientCrop();}
    if (name === 'transmutator5' && transmutatorUpV ==2) {
        alreadyPurchased();
    } else if (name === 'transmutator5' && crops >= 3000000000000000000) {
        crops -= 3000000000000000000;
        transmutatorUpV += 1;
        prodTransmutator = 781250 * transmutatorUpI * transmutatorUpII * transmutatorUpIII * transmutatorUpIV * transmutatorUpV;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'transmutator5' && crops < 3000000000000000000) {insufficientCrop();}
    if (name === 'carrot' && carrotUp == 1) {
        alreadyPurchased();
    } else if (name === 'carrot' && crops >= 100000) {
        crops -= 100000;
        carrotUp = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'carrot' && crops < 100000) {insufficientCrop();}
    if (name === 'tomato01' && tomato01Up == 1) {
        alreadyPurchased();
    } else if (name === 'tomato01' && crops >= 100000) {
        crops -= 100000;
        tomato01Up = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'tomato01' && crops < 100000) {insufficientCrop();}
    if (name === 'wheat01' && wheat01Up == 1) {
        alreadyPurchased();
    } else if (name === 'wheat01' && crops >= 100000) {
        crops -= 100000;
        wheat01Up = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'wheat01' && crops < 100000) {insufficientCrop();}
    if (name === 'pea' && peaUp == 1) {
        alreadyPurchased();
    } else if (name === 'pea' && crops >= 250000) {
        crops -= 250000;
        peaUp = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'pea' && crops < 250000) {insufficientCrop();}
    if (name === 'potato01' && potato01Up == 1) {
        alreadyPurchased();
    } else if (name === 'potato01' && crops >= 250000) {
        crops -= 250000;
        potato01Up = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'potato01' && crops < 250000) {insufficientCrop();}
    if (name === 'soybean' && soybeanUp == 1) {
        alreadyPurchased();
    } else if (name === 'soybean' && crops >= 1000000) {
        crops -= 1000000;
        soybeanUp = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'soybean' && crops < 1000000) {insufficientCrop();}
    if (name === 'lettuce' && lettuceUp == 1) {
        alreadyPurchased();
    } else if (name === 'lettuce' && crops >= 1000000) {
        crops -= 1000000;
        lettuceUp = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'lettuce' && crops < 1000000) {insufficientCrop();}
    if (name === 'wheat02' && wheat02Up == 1) {
        alreadyPurchased();
    } else if (name === 'wheat02' && crops >= 2500000) {
        crops -= 2500000;
        wheat02Up = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'wheat02' && crops < 2500000) {insufficientCrop();}
    if (name === 'turnip' && turnipUp == 1) {
        alreadyPurchased();
    } else if (name === 'turnip' && crops >= 3000000) {
        crops -= 3000000;
        turnipUp = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'turnip' && crops < 3000000) {insufficientCrop();}
    if (name === 'onion' && onionUp == 1) {
        alreadyPurchased();
    } else if (name === 'onion' && crops >= 5000000) {
        crops -= 5000000;
        onionUp = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'onion' && crops < 5000000) {insufficientCrop();}
    if (name === 'corn' && cornUp == 2) {
        alreadyPurchased();
    } else if (name === 'corn' && crops >= 5000000) {
        crops -= 5000000;
        cornUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'corn' && crops < 5000000) {insufficientCrop();}
    if (name === 'cucumber' && cucumberUp == 2) {
        alreadyPurchased();
    } else if (name === 'cucumber' && crops >= 5000000) {
        crops -= 5000000;
        cucumberUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'cucumber' && crops < 5000000) {insufficientCrop();}
    if (name === 'tomato02' && tomato02Up == 1) {
        alreadyPurchased();
    } else if (name === 'tomato02' && crops >= 7500000) {
        crops -= 7500000;
        tomato02Up = 1;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'tomato02' && crops < 7500000) {insufficientCrop();}
    if (name === 'millet' && milletUp == 2) {
        alreadyPurchased();
    } else if (name === 'millet' && crops >= 10000000) {
        crops -= 10000000;
        milletUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'millet' && crops < 10000000) {insufficientCrop();}
    if (name === 'beet' && beetUp == 2) {
        alreadyPurchased();
    } else if (name === 'beet' && crops >= 50000000) {
        crops -= 50000000;
        beetUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'beet' && crops < 50000000) {insufficientCrop();}
    if (name === 'eggplant' && eggplantUp == 2) {
        alreadyPurchased();
    } else if (name === 'eggplant' && crops >= 150000000) {
        crops -= 150000000;
        eggplantUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'eggplant' && crops < 150000000) {insufficientCrop();}
    if (name === 'pepper' && pepperUp == 2) {
        alreadyPurchased();
    } else if (name === 'pepper' && crops >= 255000000) {
        crops -= 255000000;
        pepperUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'pepper' && crops < 255000000) {insufficientCrop();}
    if (name === 'sugarcane' && sugarcaneUp == 2) {
        alreadyPurchased();
    } else if (name === 'sugarcane' && crops >= 400000000) {
        crops -= 400000000;
        sugarcaneUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'sugarcane' && crops < 400000000) {insufficientCrop();}
    if (name === 'potato02' && potato02Up == 5) {
        alreadyPurchased();
    } else if (name === 'potato02' && crops >= 600000000) {
        crops -= 600000000;
        potato02Up = 5;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'potato02' && crops < 600000000) {insufficientCrop();}
    if (name === 'garlic' && garlicUp == 2) {
        alreadyPurchased();
    } else if (name === 'garlic' && crops >= 1000000000) {
        crops -= 1000000000;
        garlicUp = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'garlic' && crops < 1000000000) {insufficientCrop();}
    if (name === 'tomato03' && tomato03Up == 2) {
        alreadyPurchased();
    } else if (name === 'tomato03' && crops >= 2000000000) {
        crops -= 2000000000;
        tomato03Up = 2;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'tomato03' && crops < 2000000000) {insufficientCrop();}
    if (name === 'rice' && riceUp == 5) {
        alreadyPurchased();
    } else if (name === 'rice' && crops >= 4000000000) {
        crops -= 4000000000;
        riceUp = 5;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'rice' && crops < 4000000000) {insufficientCrop();}
    if (name === 'pumpkin' && pumpkinUp == 5) {
        alreadyPurchased();
    } else if (name === 'pumpkin' && crops >= 10000000000) {
        crops -= 10000000000;
        pumpkinUp = 5;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'pumpkin' && crops < 10000000000) {insufficientCrop();}
    if (name === 'cassava' && cassavaUp == 5) {
        alreadyPurchased();
    } else if (name === 'cassava' && crops >= 25000000000) {
        crops -= 25000000000;
        cassavaUp = 5;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'cassava' && crops < 25000000000) {insufficientCrop();}
    if (name === 'sunflower' && sunflowerUp == 5) {
        alreadyPurchased();
    } else if (name === 'sunflower' && crops >= 75000000000) {
        crops -= 75000000000;
        sunflowerUp = 5;
        document.getElementById('purchased').appendChild(document.getElementById(idtag));
        document.getElementById(idtag).classList.add('bought');
        updateCPS();
    } else if (name === 'sunflower' && crops < 75000000000) {insufficientCrop();}
}

function openMenu(evt, tabName) { //this makes the left menu work 
    var i, menucontent, menulink;//https://www.w3schools.com/howto/howto_js_tabs.asp
    menucontent = document.getElementsByClassName("menucontent");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].style.display = "none";
    }
    menulink = document.getElementsByClassName("menulink");
    for (i = 0; i < menulink.length; i++) {
        menulink[i].className = menulink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
bigCrop.addEventListener('click', function clickDisplay() {//this is for showing your click amounts 
    var clickdisplay = document.createElement('div');//creates div element
    var clickamount = document.createTextNode("+" + clickvalue.toFixed(1));//creates a string with clickvalue
    clickstyle = {//this is for assigning css to the divs
        position: "absolute",
        top: event.clientY + "px",
        left: Math.random() * 50 + event.clientX + "px",
        fontSize: 3 + "em",
        fontFamily: 'Open sans',
        color: 'white',
        animation: "scorefade",
        animationDuration: 1.5 + "s",
        userSelect: "none",
        pointerEvents: "none",
        textShadow: `2px 2px 2px black,
        -2px 2px 2px black,
        2px -2px 0 black,
        -2px -2px 0 black`,
    };
    clickdisplay.appendChild(clickamount);//attaches text to div
    Object.keys( clickstyle ).forEach( function ( property ) {
        clickdisplay.style[ property ] = clickstyle[ property ];//this attaches the css above to each div created
    });
    document.getElementById("canvas").appendChild(clickdisplay);//attaches the div to body
    setTimeout(function() {
        clickdisplay.parentNode.removeChild(clickdisplay);//deletes div after 1s 
    }, 1000);
})

function buildingDescShow(buildingDesc, prodBuilding, ownedBuilding, buildingCps, varProdBuild, varNumBuild, lockedType, event) {
    
    if (lockedType == false) {

    } else {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById(buildingDesc).classList.remove('hide');
    document.getElementById(prodBuilding).innerHTML = varProdBuild;
    document.getElementById(ownedBuilding).innerHTML = varNumBuild;
    document.getElementById(buildingCps).innerHTML = ((varNumBuild * varProdBuild) * ((bonusMuliplier / 100) + 1) ).toFixed(1);
    document.getElementById(buildingDesc).classList.add('showBuild');
    document.getElementById(buildingDesc).style.left = (x - 600) + 'px';
    document.getElementById(buildingDesc).style.top = (y - 150) + 'px';
    }
}
function buildingDescHide(idTag) {
    document.getElementById(idTag).classList.remove('showBuild');
    document.getElementById(idTag).classList.add('hide');
}
helphanddesc.onmouseenter = function() { buildingDescShow('helphandDesc', 'prodHands', 'ownedHands', 'handCps', prodHelpHand, numHelpHands, null, event); };
helphanddesc.onmouseleave = function() { buildingDescHide('helphandDesc'); };
farmerjoedesc.onmouseenter = function() { buildingDescShow('farmerjoeDesc', 'prodJoes', 'ownedJoes', 'joeCps', prodFarmerJoe, numFarmerJoe, unlockedJoe, event); };
farmerjoedesc.onmouseleave = function() { buildingDescHide('farmerjoeDesc'); };
fielddesc.onmouseenter = function() { buildingDescShow('fieldDesc', 'prodFields', 'ownedFields', 'fieldCps', prodField, numField, unlockedField, event); };
fielddesc.onmouseleave = function() { buildingDescHide('fieldDesc'); };
harvesterdesc.onmouseenter = function() { buildingDescShow('harvesterDesc', 'prodHarvesters', 'ownedHarvesters', 'harvesterCps', prodHarvester, numHarvester, unlockedHarvester, event); };
harvesterdesc.onmouseleave = function() { buildingDescHide('harvesterDesc'); };
greenhousedesc.onmouseenter = function() { buildingDescShow('greenhouseDesc', 'prodGreenhouses', 'ownedGreenhouses', 'greenhouseCps', prodGreenhouse, numGreenhouse, unlockedGreenhouse, event); };
greenhousedesc.onmouseleave = function() { buildingDescHide("greenhouseDesc"); };
skyscraperdesc.onmouseenter = function() { buildingDescShow('skyscraperDesc', 'prodSkyscrapers', 'ownedSkyscrapers', 'skyscraperCps', prodSkyscraper, numSkyscraper, unlockedSkyscraper, event); };
skyscraperdesc.onmouseleave = function() { buildingDescHide('skyscraperDesc'); };
bunkerdesc.onmouseenter = function() { buildingDescShow('bunkerDesc', 'prodBunkers', 'ownedBunkers', 'bunkerCps', prodBunker, numBunkers, unlockedBunker, event); };
bunkerdesc.onmouseleave = function() { buildingDescHide("bunkerDesc"); };
replicatordesc.onmouseenter = function() { buildingDescShow('replicatorDesc', 'prodReplicators', 'ownedReplicators', 'replicatorCps', prodReplicator, numReplicator, unlockedReplicator, event); };
replicatordesc.onmouseleave = function() { buildingDescHide('replicatorDesc'); };
planetdesc.onmouseenter = function() { buildingDescShow('planetDesc', 'prodPlanets', 'ownedPlanets', 'planetCps', prodPlanet, numPlanet, unlockedPlanet, event); };
planetdesc.onmouseleave = function() { buildingDescHide('planetDesc'); };
transmutatordesc.onmouseenter = function() { buildingDescShow('transmutatorDesc', 'prodTransmutators', 'ownedTransmutator', 'transmutatorCps', prodTransmutator, numTransmutator, unlockedTransmutator, event); };
transmutatordesc.onmouseleave = function() { buildingDescHide('transmutatorDesc'); };

function upgradeDescHide(upgradeName) {
    document.getElementById('leftbar').removeChild(descBox);
}
function upgradeDescBox(title, cost, index, event) {
    var descBox = document.createElement("div");
    var descTitle = document.createElement("h5");
    var descCost = document.createElement("p");
    var descBean = document.createElement("img");
    var descLine = document.createElement("hr");
    var descDesc = document.createElement("p");
    var x = event.clientX;
    var y = event.clientY;
    descTitle.innerHTML = title;
    descCost.innerHTML = 'Cost: '+commaForm.format(cost);
    descBean.src = 'images/bean16.png';
    if (index <= 10) { descDesc.innerHTML = upgradeDesc[0]; }
    if (10 < index && index <= 15) { descDesc.innerHTML = upgradeDesc[1]; }
    if (15 < index && index <= 20) { descDesc.innerHTML = upgradeDesc[2]; }
    if (20 < index && index <= 25) { descDesc.innerHTML = upgradeDesc[3]; }
    if (25 < index && index <= 30) { descDesc.innerHTML = upgradeDesc[4]; }
    if (30 < index && index <= 35) { descDesc.innerHTML = upgradeDesc[5]; }
    if (35 < index && index <= 40) { descDesc.innerHTML = upgradeDesc[6]; }
    if (40 < index && index <= 45) { descDesc.innerHTML = upgradeDesc[7]; }
    if (45 < index && index <= 50) { descDesc.innerHTML = upgradeDesc[8]; }
    if (50 < index && index <= 55) { descDesc.innerHTML = upgradeDesc[9]; }
    if (55 < index && index <= 60) { descDesc.innerHTML = upgradeDesc[10]; }
    if (60 < index && index <= 71) { descDesc.innerHTML = upgradeDesc[11]; }
    if (71 < index && index <= 80) { descDesc.innerHTML = upgradeDesc[12]; }
    if (80 < index && index <= 85) { descDesc.innerHTML = upgradeDesc[13]; }
    descBox.appendChild(descTitle);
    descBox.appendChild(descCost);
    descBox.appendChild(descBean);
    descBox.appendChild(descLine);
    descBox.appendChild(descDesc);
    descBox.classList.add('showUpgrade');
    descBox.id = "descBox";
    document.getElementById('leftbar').appendChild(descBox);
    document.getElementById('descBox').style.left = (x + 50) + 'px';
    document.getElementById('descBox').style.top = (y - 50) + 'px';
}
upgradeIcon.forEach((element, index) => {
    element.onmouseenter = function() { upgradeDescBox(upgradeTitle[index], upgradeCost[index], index, event); };
    element.onmouseleave = function() { upgradeDescHide('upgrade'+(index+1)); };
})
function achievementDescShow(event, id) {
    var x = event.clientX;
    var y = event.clientY;
    console.log(id);
    document.getElementById(id).classList.remove('hide');
    document.getElementById(id).classList.add('showAchive');
    document.getElementById(id).style.left = (x + 2) + 'px';
    document.getElementById(id).style.top = (y + 2) + 'px';
    
}
function achievementDescHide(id) {
    document.getElementById(id).classList.remove("showAchive");
    document.getElementById(id).classList.add("hide");
}

achievementIcon.forEach((element, index) => {
    element.onmouseenter = function() { achievementDescShow(event, index+1); };
    element.onmouseleave = function() { achievementDescHide(index+1); };
})

nightModeBtn.onclick = function() {
    if (nightModeBtn.value == 'off') {
        document.getElementById('canvas').classList.remove('daymode');
        document.getElementById('canvas').classList.add('nightmode');
        nightModeBtn.value = 'on';
        nightModeBtn.innerHTML = 'Night Mode | ON';
        nightMode = 1;
    } else {
        document.getElementById('canvas').classList.remove('nightmode');
        document.getElementById('canvas').classList.add('daymode');
        nightModeBtn.value = 'off';
        nightModeBtn.innerHTML = 'Night Mode | OFF';
        nightMode = 0;
    }
}

soundSettingBtn.onclick = function() {
    if (soundSettingBtn.value == 'on') {
        soundSetting = 1;
        soundSettingBtn.value = 'off';
        soundSettingBtn.innerHTML = 'Audio | OFF';
    } else {
        soundSetting = 0;
        soundSettingBtn.value = 'on';
        soundSettingBtn.innerHTML = 'Audio | ON';
    }
}

function saveGameNotif() {
    var saveNotif = document.createElement('div');
    var saveText = document.createTextNode("Game has been saved.")
    savestyle = {
        position: "relative",
        textAlign: "center",
        animation: "savefade",
        animationDuration: 5 + "s",
        color: "white",
        backgroundImage: "url(images/descBg.jpg)",
        borderImage: "url(images/frame1.png) 30% round",
        borderStyle: "solid",
        borderWidth: "15px",
        width: "25%",
        fontFamily: "Open sans",
        marginLeft: "auto",
        marginRight: "auto",
    };
    saveNotif.appendChild(saveText);
    Object.keys( savestyle ).forEach( function ( property ) {
        saveNotif.style[ property ] = savestyle[ property ];
    });
    document.getElementById("notifBar").appendChild(saveNotif);
    setTimeout(function() {
        saveNotif.parentNode.removeChild(saveNotif);
    }, 5000);
}
function insufficientCrop() {
    var insufNotif = document.createElement("div");
    var insufText = document.createTextNode("You don't have enough crops.");
    insufstyle = {
        position: "relative",
        textAlign: "center",
        animation: "savefade",
        animationDuration: 5 + "s",
        color: "white",
        backgroundImage: "url(images/descBg.jpg)",
        borderImage: "url(images/frame1.png) 30% round",
        borderStyle: "solid",
        borderWidth: "15px",
        width: "25%",
        fontFamily: "Open sans",
        marginLeft: "auto",
        marginRight: "auto"
    };
    insufNotif.appendChild(insufText);
    Object.keys ( insufstyle ).forEach( function ( property ) {
        insufNotif.style[ property ] = insufstyle[ property ];
    });
    document.getElementById("notifBar").appendChild(insufNotif);
    setTimeout(function() {
        insufNotif.parentNode.removeChild(insufNotif);
    }, 5000);
}
function alreadyPurchased() {
    var purchNotif = document.createElement("div");
    var purchText = document.createTextNode("This Upgrade has already been purchased.");
    purchstyle = {
        position: "relative",
        textAlign: "center",
        animation: "savefade",
        animationDuration: 5 + "s",
        color: "white",
        backgroundImage: "url(images/descBg.jpg)",
        borderImage: "url(images/frame1.png) 30% round",
        borderStyle: "solid",
        borderWidth: "15px",
        width: "25%",
        fontFamily: "Open sans",
        marginLeft: "auto",
        marginRight: "auto"
    };
    purchNotif.appendChild(purchText);
    Object.keys ( purchstyle ).forEach( function ( property ) {
        purchNotif.style[ property ] = purchstyle[ property ];
    });
    document.getElementById("notifBar").appendChild(purchNotif);
    setTimeout(function() {
        purchNotif.parentNode.removeChild(purchNotif);
    }, 5000);
}

function achievementNotif(img, title) {//this is the notif for achievements use img and title in functions above
    const closebtn = document.createElement("button");
    var achiveNotif = document.createElement("div");
    var achiveText = document.createElement("p");
    var achiveImg = document.createElement("img")
    var achiveTitle = document.createElement("h3");
    achiveImg.src = img;
    achiveTitle.innerHTML =  title;
    closebtn.innerHTML = 'X';
    achiveText.innerHTML = 'Achievement unlocked!';
    achivestyle = {
        position: "relative",
        textAlign: "center",
    };
    achiveNotif.appendChild(achiveImg);
    achiveNotif.appendChild(achiveText);
    achiveNotif.appendChild(achiveTitle);
    achiveNotif.appendChild(closebtn);
    Object.keys ( achivestyle ).forEach( function ( property ) {
        achiveNotif.style[ property ] = achivestyle[ property ];
    });
    achiveImg.classList.add('achiveimgstyle');
    achiveNotif.classList.add('achivenotif');
    closebtn.classList.add('achivebtn');
    achiveText.classList.add('achivetext');
    achiveTitle.classList.add('achivetext');
    document.getElementById("notifBar").appendChild(achiveNotif);
    closebtn.onclick = function() {
        achiveNotif.parentNode.removeChild(achiveNotif);
    }
}
document.addEventListener("DOMContentLoaded", function() {//runs function after page load for upgrade ui checks
    allUpgradeCheck();
    updateAchievements();
}) // before cleanup 3516 lines 182kb