import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// allows us to configure the project to use the enzyme adapter
// more info: https://stackoverflow.com/questions/55344422/what-is-adapter-in-enzyme#:~:text=The%20adapter%20abstracts%20away%20anything,code%20can%20stay%20the%20same.&text=mount%20and%20shallow%20are%20both%20exported%20from%20enzyme%20.
configure({
    adapter: new Adapter()
});