import Layout from '../../constants/Layout';

const prototypeWidth = 320;
const prototypeHeight = 640;

const protoPixelAmount = prototypeWidth * prototypeHeight;
const windowPixelAmount = Layout.window.height * Layout.window.width;

const multiplier = windowPixelAmount / protoPixelAmount;

export default (size) => 1.373 * size;
