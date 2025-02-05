import { DemoAppRoot } from "demo-ota-core-navigation";

const contexts = [
    {
        context: require.context('./app', true, /.*/),
        prefix: '.'
    },
    {
        context: require.context('./node_modules/demo-ota-auth/app/(auth)', true, /.*/),
        prefix: '(auth)'
    },
    {
        context: require.context('./node_modules/demo-ota-main/app/(products)', true, /.*/),
        prefix: '(products)'
    },
];

const App = () => {
    return (<DemoAppRoot contexts={contexts} />);
};

export default App;