// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

import { Header } from './components/Header';
import { Productdetail } from './components/productDetail';
import { ProductList } from './components/ProductList';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/ReactClothStoreWebApp' component={ProductList} />
					<Route exact path='/product/:productId' component={Productdetail} />
					<Route>404</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
