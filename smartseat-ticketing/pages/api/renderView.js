export default function renderView(parent, Views){
    console.log("RENDER")
    parent.state = parent.state || {};
    const {view, ContentView} = parent.state;
    const View = view === 'Wrapper'
      ? ContentView
      : Views[view];
    const Wrapper = Views['Wrapper'];
    const props = {parent};
    const content = <View {...props} />;
    return <Wrapper {...{content}} />;
}