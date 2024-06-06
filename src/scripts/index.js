function WebRTCServer() {
  this.certificate_ = null;
  this.connection_ = new RTCPeerConnection();
}

WebRTCServer.prototype.GetCertificate = function() {
  if (null === this.certificate_) {
    this.connection_ = new RTCPeerConnection();
  }
  if (null === this.certificate_) {
    var that = this;
    var algorithm = {
      "name": "ECDSA",
      "namedCurve": "P-256"
    };
    RTCPeerConnection.generateCertificate(algorithm).then(function(arg) {
      that.certificate_ = arg;
      return new Promise(function(resolver) {
        resolver(that.certificate_);
      })
    })
  }
}