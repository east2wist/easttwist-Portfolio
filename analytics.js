function loadMetricool() {
  const script = document.createElement("script");

  script.src = "https://tracker.metricool.com/resources/be.js";
  script.async = true;

  script.onload = function () {
    if (window.beTracker) {
      window.beTracker.t({
        hash: "d701b00dd3b369ed53e3e2d4ca7f55ef",
      });
    }
  };

  document.head.appendChild(script);
}

loadMetricool();
