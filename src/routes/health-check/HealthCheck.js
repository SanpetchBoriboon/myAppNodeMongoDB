class HealthCheck {
  constructor() {
    this.type = "get";
    this.path = "/health";
  }
  attach(express) {
    express[this.type](this.path, this.endpoint);
  }
  async endpoint(req, res) {
    try {
      res.status(200);
      res.send("Check");
      return res.end();
    } catch (err) {
      console.debug(err);
    }
  }
}

exports.HealthCheck = HealthCheck;
