const Client = ({ client }) => {
      // console.log(Object.keys(client).join(','));
    const {gram,
        thanaHeadName,
        fatherOrHusbandName,
        holdingNumber,
        landArea,
        totalFamilyMembers,
        uneducatedCount,
        femaleCount,
        unemployedCount,
        age18Plus,
        ownership,
        word,
        mainMobile,
        nationalID,
        occupation,
        religion,
        educatedFamilyCount,
        maleFamilyCount,
        workingFamilyCount,
        age0to18,
        totalMaleVoters,
        freedomFightersCount,
        houseType,
        totalFemaleVoters,
        widowCount,
        disabledCount,
        divorcedCount,
        benefitsFromUP,
        latrine,
        landArea2,
        houseValue,
        taxByUP,
        assessmentTax,
        well} = client
  return (
    <tbody>
      <tr>
        <th>1</th>
        <th>গাইবান্ধা সদর </th>
        <th>১নং লক্ষীপুর ইউ‌ পি</th>
        <th>{gram}</th>
        <th>{word}</th>
        <th>{thanaHeadName}</th>
        <th>01712-21895</th>
        <th>3510 </th>
        <th>1200</th>
        <th>100</th>
        <th>100</th>
        <th>একশন</th>
      </tr>
    </tbody>
  );
};
export default Client;