function autocomplete(inp) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/

    var arr = ['REDCap ID', 'How do you like to consent?', 'Do you Consent?', 'Reason for not willing to participate?', 'Please specify:', 'Signature of Participant:', 'Date of Consent', 'Study Location:', 'Hypertension', 'Dyslipidemia', 'Diabetes', 'Obesity', 'Smoking', 'Sedentary life-style', 'Heavy alcohol intake', 'Previous stroke', 'Heart diseases', 'Familiar hx of stroke/MI', 'Smoking.1', 'Gastric ulcer', 'Heart diseases.1', 'Heavy alcohol intake.1', 'Previous stroke.1', 'Constipation', 'Obesity.1', 'HIV/AIDS', 'Hypertension.1', 'High salt intake', 'Familiar hx of stroke/ MI', 'Physical active', 'Colitis', 'No alcohol intake', 'Physical inactivity', 'Kidney stones', 'Dyslipidemia.1', 'Abdominal pain', 'Diabetes.1', 'Familiar hx of allergy', '1.Shortness of breath', '2.Central chest pain (crushing,excrutiating, heaviness)', '3.Fainting/Dizziness', '4.Arm pain/ numbness', '5.Feeling sick and looking pallor on the skin', '6.Sweating and clammy skin', '7.Neck/ jaw pain radiating from the chest', '8. Nausea', 'Confusion', 'Neck/jaw pain radiating from chest', 'Difficulty in speaking', 'Shortness of breath', 'Arm pain/numbness', 'Bloated abdominal pain', 'Facial palsy', 'Central chest pain (excrutiating, crushing)', 'Difficulty in seeing with one/both eye(s)', 'Nausea', 'Fainting/diziness', 'Weakness of arm and leg', 'Acute headache', 'Sweating and clammy skin', 'Feeling sick, looking pallor on the skin', 'Ear pain', 'Complete?', 'Q3a: If you get a heart attack how long will you wait before contacting the doctor/hospital? (multiple choice)', 'Q4a: Is heart attack preventable? (multiple choice)', 'Q4b: Does reducing/treating risk factors reduce likelihood of heart attack? (multiple choice)', 'Q4c: Do you know any ways that can treat heart attack? (multiple choice)', 'Q4d: Do you know any ways that can reduce heart attack risk factors? (multiple choice) (choice=Lifestyle changes)', 'Q4d: Do you know any ways that can reduce heart attack risk factors? (multiple choice) (choice=Medical care)', 'Q4d: Do you know any ways that can reduce heart attack risk factors? (multiple choice) (choice=No idea)', 'Q4d: Do you know any ways that can reduce heart attack risk factors? (multiple choice) (choice=None)', 'Q4e: If lifestyle, name:', '1.Friends', '2.Family', '4.Own experience', '5.Television', '6.Magazines', '7.Radio', '8.Nurse', '9.Social media (internet, Facebook, WhatsApp)', '10.Medical doctor', '11. Other , name:', 'Please specify:.1', 'Q6a: What would you do if you suspected that you are having a heart attack?(multiple-choice question)', 'Please specify:.2', 'Q6b: Which medical care level would you contact first if you suspected that you are having a heart attack?(multiple-choice)', '1.Feeling sick and pallor on skin', '2.Arm pain/numbness', '3.Shortness of breath', '4.Central chest pain (excruatiating, tightness, crushing)', '5.Sweating and clammy skin', '6.Fainting /dizziness', '7.Neck/ jaw pain radiating from chest', '8. Nausea.1', 'Complete?.1', 'Sex:', 'Age:', 'Education:', 'If Tertiary please specify level:', 'Marital Status:', 'Profession:', 'Annual Salary:', '1. Diabetes', 'Confirmed?', 'Diabetes Self Reported?', 'Diabetes Type:', 'Diabetes Type Self Reported?', 'Year Diabetes Diagnosed:', 'Year Self Reported?', '2a. Dyslipidemia', 'Confirmed?.1', 'Dyslipidemia Self Reported?', 'Year Dyslipidemia Diagnosed:', 'Year Dyslipidemia Self Reported?', 'Total cholesterol Last value measured:', 'Total cholesterol Last value measured Self Reported?', 'What do you think about the value?', 'When was the last Total Cholesterol last measured ?', 'Total Cholesterol Last Measured Self Reported?', 'LDL last value measured?', 'LDL last value measured Self Reported?', 'When LDL measured last? Or never?', 'LDL Last value measured Date Self Reported?', 'Do you think value is high, normal or low?', 'HDL when last measured/never?', 'HDL when last  date measured -Self Reported?', 'HDL value measured?', 'Last HDL - value self reported?', 'Last HDL - value High, Normal or Low?', '3. Hypertension Diagnosed?', 'Confirmed?.2', 'Hypertension Self Reported?', 'Year of Hypertension Diagnosis:', 'Year of Hypertension Self Reported?', '4.Heart diseases Diagnosis', 'Confirmed?.3', 'Heart Disease Diagnosis Self Reported?', 'Year of Heart Disease Diagnosis:', 'Year of Heart Disease Diagnosis Self Reported?', '5. Do you smoke?', 'Smoking self reported?', 'If yes, what do you smoke? (choice=Pipe/Cigar)', 'If yes, what do you smoke? (choice=Cigarette)', 'If yes, what do you smoke? (choice=Other)', 'Please specify:.3', 'How many daily?', 'Year started smoking:', 'If ex-smoker, year stopped', 'Why stopped Smoking?', 'Is smoking good for  your health?', 'If yes, specify', 'How often in a day do you eat Fruits?', 'How often in a week do you eat Fruits?', 'How often in a day do you eat Vegetables?', 'How often in a week do you eat Vegetables?', 'How often in a day do you eat Grains?', 'How often in a week do you eat Grains?', 'How often in a day do you eat Milk and dairy?', 'How often in a week do you eat Milk and dairy?', 'How often in a day do you eat Meat and eggs?', 'How often in a week do you eat Meat and eggs?', 'How often in a day do you eat Fish and seafood?', 'How often in a week do you eat Fish and seafood?', 'How often in a day do you eat Nuts?', 'How often in a week do you eat Nuts?', 'How often in a day do you eat Beans?', 'How often in a week do you eat Beans?', 'How often in a day do you eat Sodium?', 'How often in a week do you eat Sodium?', 'Dietary Status Started (Month/Year)', 'Do you think your dietary habit is healthy?', 'If Yes, specify:', 'Do you do any physical activity?', 'Physical activities self reported', 'Type of activity?', 'How many minutes in a day?', 'How many times in a week?', 'Year started Physical Activity?', 'If ex, year stopped physical activity', 'If Ex, why stopped physical activity?', 'How would you grade the intensity of your physical activities?', 'Alcohol intake', 'Alcohol intake self reported', 'What do you drink (choice=Beer)', 'What do you drink (choice=Wine)', 'What do you drink (choice=Whisky)', 'What do you drink (choice=Other)', 'Other type of drink', 'How often do you drink (per day/week/month)?', 'How much do you drink (no. of cans, glass of wine etc) per day/week/month', 'Alcohol intake year started', 'If ex, year stopped', 'If Ex, why stopped?', 'How would you grade your alcohol intake?', '9. Previous stroke', 'Year of previous stroke', 'Previous stroke self reported', '10. Family hereditary of stroke; stroke/heart diseases/both', 'Family hereditary of stroke/heart diseases self reported', 'Waist_1(cm)', 'Waist_2 (cm)', 'Waist Average', 'Waist_meters', 'Hip_1 (cm)', 'Hip_2 (cm)', 'Hip Average', 'Weight (kg)', 'Height_1 (cm)', 'Height_2 (cm)', 'Average Height', 'Average Height (m)', 'Height^1/2', 'Height^3/2', 'BMI', 'BMI_^2/3', 'WHR:', 'ABSI:', 'AVI:', 'BAI:', 'BRI_Part_1', 'BRI:', 'pie(3.14)*2^2', 'Height^2', 'CI:', 'WHtR', 'What do you think of your weight?', 'Year of Diagnosis:', 'Year of Diagnosis Self Reported?', '12. HIV/AIDS diagnosis?', 'Confirmed?.4', 'HIV/AIDS diagnosis self reported?', 'Year of HIV/AIDS diagnosis', 'Year of HIV/AIDS diagnosis self reported', 'Complete?.2', '9). OTHER DISEASES', 'Name of Disease:', 'Disease Self Reported?', 'Year Disease Identified:', 'Year Identified Self Reported?', 'OTHER DISEASES', 'Name of Disease:.1', 'Disease Self Reported?.1', 'Year Disease Identified:.1', 'Year Identified Self Reported?.1', 'OTHER DISEASES.1', 'Name of Disease:.2', 'Disease Self Reported?.2', 'Year Disease Identified:.2', 'Year Identified Self Reported?.2', 'OTHER DISEASES.2', 'Name of Disease:.3', 'Disease Self Reported?.3', 'Year Disease Identified:.3', 'Year Identified Self Reported?.3', 'OTHER DISEASES.3', 'Name of Disease:.4', 'Disease Self Reported?.4', 'Year Disease Identified:.4', 'Year Identified Self Reported?.4', 'OTHER DISEASES.4', 'Name of Disease:.5', 'Disease Self Reported?.5', 'Year Disease Identified:.5', 'Year Identified Self Reported?.5', 'OTHER DISEASES.5', 'Name of Disease:.6', 'Disease Self Reported?.6', 'Year Disease Identified:.6', 'Year Identified Self Reported?.6', 'OTHER DISEASES.6', 'Name of Disease:.7', 'Disease Self Reported?.7', 'Year Disease Identified:.7', 'Year Identified Self Reported?.7', 'OTHER DISEASES.7', 'Name of Disease:.8', 'Disease Self Reported?.8', 'Year Disease Identified:.8', 'Year Identified Self Reported?.8', 'OTHER DISEASES.8', 'Name of Disease:.9', 'Disease Self Reported?.9', 'Year Disease Identified:.9', 'Year Identified Self Reported?.9', 'Name of medication:', 'Medication Self-identified?', 'Indication/reasons: Why are you using it?', 'Self-identified?', 'When did you start and end?', 'Who recommended cessation?', 'Please specify:.4', 'How often do you take your medications in a week (as recommended)?', 'Please specify:.5', 'Why not take them as recommended?', 'Please specify:.6', 'Name of medication:.1', 'Medication Self-identified?.1', 'Indication/reasons: Why are you using it?.1', 'Self-identified?.1', 'When did you start and end?.1', 'Who recommended cessation?.1', 'Please specify:.7', 'How often do you take your medications in a week (as recommended)?.1', 'Please specify:.8', 'Why not take them as recommended?.1', 'Please specify:.9', 'Name of medication:.2', 'Medication Self-identified?.2', 'Indication/reasons: Why are you using it?.2', 'Self-identified?.2', 'When did you start and end?.2', 'Who recommended cessation?.2', 'Please specify:.10', 'How often do you take your medications in a week (as recommended)?.2', 'Please specify:.11', 'Why not take them as recommended?.2', 'Please specify:.12', 'Name of medication:.3', 'Medication Self-identified?.3', 'Indication/reasons: Why are you using it?.3', 'Self-identified?.3', 'When did you start and end?.3', 'Who recommended cessation?.3', 'Please specify:.13', 'How often do you take your medications in a week (as recommended)?.3', 'Please specify:.14', 'Why not take them as recommended?.3', 'Please specify:.15', 'Name of medication:.4', 'Medication Self-identified?.4', 'Indication/reasons: Why are you using it?.4', 'Self-identified?.4', 'When did you start and end?.4', 'Who recommended cessation?.4', 'Please specify:.16', 'How often do you take your medications in a week (as recommended)?.4', 'Please specify:.17', 'Why not take them as recommended?.4', 'Please specify:.18', 'Name of medication:.5', 'Medication Self-identified?.5', 'Indication/reasons: Why are you using it?.5', 'Self-identified?.5', 'When did you start and end?.5', 'Who recommended cessation?.5', 'Please specify:.19', 'How often do you take your medications in a week (as recommended)?.5', 'Please specify:.20', 'Why not take them as recommended?.5', 'Please specify:.21', 'Name of medication:.6', 'Medication Self-identified?.6', 'Indication/reasons: Why are you using it?.6', 'Self-identified?.6', 'When did you start and end?.6', 'Who recommended cessation?.6', 'Please specify:.22', 'How often do you take your medications in a week (as recommended)?.6', 'Please specify:.23', 'Why not take them as recommended?.6', 'Please specify:.24', 'Name of medication:.7', 'Medication Self-identified?.7', 'Indication/reasons: Why are you using it?.7', 'Self-identified?.7', 'When did you start and end?.7', 'Who recommended cessation?.7', 'Please specify:.25', 'How often do you take your medications in a week (as recommended)?.7', 'Please specify:.26', 'Why not take them as recommended?.7', 'Please specify:.27', 'Name of medication:.8', 'Medication Self-identified?.8', 'Indication/reasons: Why are you using it?.8', 'Self-identified?.8', 'When did you start and end?.8', 'Who recommended cessation?.8', 'Please specify:.28', 'How often do you take your medications in a week (as recommended)?.8', 'Please specify:.29', 'Why not take them as recommended?.8', 'Please specify:.30', 'Name of medication:.9', 'Medication Self-identified?.9', 'Indication/reasons: Why are you using it?.9', 'Self-identified?.9', 'When did you start and end?.9', 'Who recommended cessation?.9', 'Please specify:.31', 'How often do you take your medications in a week (as recommended)?.9', 'Please specify:.32', 'Why not take them as recommended?.9', 'Please specify:.33', 'MOBILITY', 'SELF-CARE', 'USUAL ACTIVITIES', 'PAIN/DISCOMFORT', 'ANXIETY/DEPRESSION', 'b). We would like to know how good or bad your health is TODAY. This scale is numbered from 0 to 100.    100 means the best health you can imagine.   0 means the worst health you can imagine.     Can you indicate how your health is TODAY from 0-100?     Please write/name the number mentioned on the scale in the space below.', 'YOUR HEALTH TODAY', 'Comes from same family?', 'Is from same compound?', 'Is from same working place?', 'Is from same company?', 'Have medical insurance?', 'Is she pregnant?', 'How many months?', 'Is she in a post maternity period (within 24 months)?', 'If yes, how many months?', 'Research Assistant Signature:', 'Complete?.3'];
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}