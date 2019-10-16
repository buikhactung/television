let Tivi = function (channel,volume,status) {
    this.channel = channel;
    this.volume = volume;
    this.status = true;
    this.changeChannel = function (newChannel) {
        this.channel = newChannel;
    };
    this.changeVolume = function () {
        this.volume ++;
    };
    this.changeVolume2 = function () {
        this.volume --;
    };
    this.changeChannelTang = function () {
        this.channel ++;
    };
    this.changeChannelGiam = function () {
        this.channel--;
    }
};
let Remote = function (key) {
    this.key = key;
    this.channel = function (tv,newChannel) {
        tv.changeChannel(newChannel);
    };
    this.volume = function (tv,newVolume) {
        tv.changeVolume(newVolume)
    };
};
let tv = new Tivi(8,40,true);
let remote = new Remote(123);
let str = " ";
function getChannel(a) {
    str += a;
    return str;
}
function doikenh() {
    tv.changeChannel(str);
    document.getElementById("display2").innerHTML = "kênh hiện tại là: " +tv.channel;
    str = " "
}

function tangVolume() {
    tv.changeVolume();
    document.getElementById("display2").innerHTML = "volume " + tv.volume;
}
function giamVolume() {
    tv.changeVolume2();
    document.getElementById("display2").innerHTML = "volume " + tv.volume;
}
function tangChannel() {
    tv.changeChannelTang();
    document.getElementById("display2").innerHTML = "kênh hiện tại là: " +tv.channel;

};
function giamChannel() {
    tv.changeChannelGiam();
    document.getElementById("display2").innerHTML = "kênh hiện tại là: " +tv.channel;

}