const picInputFile = document.querySelector(
  '.work-experience-picture__file'
);

picInputFile.addEventListener('input', getPicName);

function getPicName(event) {
  const fullname = event.target.files[0].name;
  const name = splitFullname(fullname);
  console.log(form.value);
  picInputFile.value = name;
}

function splitFullname(fullname) {
  const arrayAfterSplittingDot = fullname.split('.');
  const picName = arrayAfterSplittingDot[0];

  return picName;
}
