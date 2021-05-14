let alertStack = [];
window.appendError = (errInfo, duration = 5000) => {
  alertStack.push(alertStack.length + 1);
  $(document.body)
    .prepend(`<div class="alert alert-warning fade show formal" stack="${
    alertStack.length
  }"
  role="alert" style="bottom: calc(10px + ${42 * (alertStack.length - 1)}px);">
    ${errInfo}
  </div>`);

  const timeout = setTimeout(() => {
    $(`div.alert[stack=${alertStack[0]}]`).alert("close");
    clearTimeout(timeout);
    alertStack.shift();
  }, duration);
};
