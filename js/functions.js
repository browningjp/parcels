// read in people database CSV file
function readCSVFile(input) {
    let f = input.files[0]
    let reader = new FileReader();

    reader.readAsBinaryString(f);
    reader.onload = function (e) {
        parseData(e.target.result);
    }

    vm.filename = f.name;
}

// parse CSV data
function parseData(data) {
    let people = [];
    let lines = data.split("\r\n");
    lines.shift() // remove headings

    lines.forEach(res => {
        personArray = res.split(",");
        person = {};
        person.surname = personArray[0];
        person.firstname = personArray[1];
        person.middlenames = personArray[2];
        person.email = personArray[3];
        people.push(person);
    });

    vm.$data.people = people;
}

function addItem(person, numNewParcels, numNewLetters) {

    // if person not in list already, add them
    if (!(person.email in vm.parcels)) {
        vm.$set(
            vm.parcels,
            person.email, 
            {
                "person": person,
                "parcels": 0,
                "letters": 0
            }
        );
    };

    // add parcels and letters to counts
    vm.$set(vm.parcels[person.email], 'parcels', Number(vm.parcels[person.email].parcels) + numNewParcels);
    vm.$set(vm.parcels[person.email], 'letters', Number(vm.parcels[person.email].letters) + numNewLetters);

}
    
function checkIfParcelEmpty(parcel) {
    // if there are no parcels or letters left for this person, delete them from the parcel list
    if (parcel.parcels + parcel.letters == 0) {
        Vue.delete(vm.parcels, parcel.person.email);
    }    
}

// comparator function for comparing two parcels by recipient name
function compareNames(parcel1, parcel2) {
    // first sort by surname
    str1 = parcel1.person.surname;
    str2 = parcel2.person.surname;
    compareSurnames = str1 < str2 ? -1 : str1 > str2;
    if (compareSurnames != 0) return compareSurnames;

    // then sort by first name
    str1 = parcel1.person.firstname;
    str2 = parcel2.person.firstname;
    compareFirstnames = str1 < str2 ? -1 : str1 > str2;
    if (compareFirstnames != 0) return compareFirstnames;

    // then sort by middle names
    str1 = parcel1.person.middlenames;
    str2 = parcel2.person.middlenames;
    return str1 < str2 ? -1 : str1 > str2;
}

function createBookmarkURL(subject, body) {
    currentURL = window.location.href;
    baseURL = currentURL.substring(0, currentURL.indexOf('?'));
    return baseURL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

function clearParcels() {
    vm.parcels = {};
}