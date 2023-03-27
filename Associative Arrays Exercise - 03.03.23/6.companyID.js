function companyID(input) {
    let companiesObj = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');

        if (!companiesObj[company]) {
            companiesObj[company] = new Set();
        }
        companiesObj[company] = companiesObj[company].add(id);

    }
    
    let comapaniesArr = Object.entries(companiesObj);
    let sortedCompaniesArr = comapaniesArr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))
     for (const [company, set] of sortedCompaniesArr) {
        console.log(company);
        for (const id of set) {
            console.log(`-- ${id}`);
            
        }
     }

}
companyID(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])