rdmnmbr = 6405780

ThunkableWebviewerExtension.postMessage(rdmnmbr)

function Checkforcode() {

  userincode = document.getElementById('code').value
  if (userincode == rdmnmbr) {
    window.open("videocll.html");
    document.getElementById('result').innerHTML = 'Logging you in'
  }
  else
    document.getElementById('result').innerHTML = 'Code Invalid'


}
