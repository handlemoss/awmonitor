import ky from 'ky'

function() {
                        var e = Object(l.a)(x.a.mark((function e() {
                            return x.a.wrap((function(e) {
                                for(;;) switch(e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ae("https://api.coingecko.com/api/v3/simple/price?ids=alien-worlds&vs_currencies=php").then((function(e) {
                                            return e.json()
                                        })).then((function(e) {
                                            f(e["alien-worlds"].php)
                                        })).catch((function(e) {
                                            return console.error("error:" + e)
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
