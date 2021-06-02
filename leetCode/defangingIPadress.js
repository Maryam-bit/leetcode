var defangIPaddr = function(address) {
    let IP = address.split('.').join('[.]')
    console.log(IP)
    return IP
};
defangIPaddr('255.100.50.0')