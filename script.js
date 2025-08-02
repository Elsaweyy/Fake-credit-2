document.getElementById("generateBtn").onclick = function () {
  const avatar = document.getElementById("avatar").value || "https://cdn.discordapp.com/embed/avatars/0.png";
  const username = document.getElementById("username").value || "SUPER";
  const date = document.getElementById("date").value || "01/22/2025 3:52 PM";
  const command = document.getElementById("command").value || "c @mention 7500000";
  const botname = document.getElementById("botname").value || "s5_r";
  const amount = document.getElementById("amount").value || "7500000";
  const receiver = document.getElementById("receiver").value || "@Ahmed";

  document.getElementById("userAvatarImg").src = avatar;
  document.getElementById("userName").innerText = username;
  document.getElementById("userTime").innerText = date;
  document.getElementById("userCommand").innerText = command;

  document.getElementById("botTime").innerText = date;
  document.getElementById("botReply").innerHTML =
    `💰 | ${botname}, has transferred <b>$${amount}</b> to <span class="mention">${receiver}</span>`;
};

document.getElementById("downloadBtn").onclick = function () {
  html2canvas(document.getElementById("capture")).then(canvas => {
    const link = document.createElement('a');
    link.download = 'fake_probot_message.png';
    link.href = canvas.toDataURL();
    link.click();
  });
};
