
import './App.css'
import Header from './components/Header/Header'
import SingleProduct from './components/SingleProduct/SingleProduct'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Products from './components/UI/Products';
import AddProduct from './components/UI/AddProduct';

const queryClient = new QueryClient();
function App() {


  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Header></Header>
    <SingleProduct></SingleProduct>
    <Products></Products>
    <AddProduct></AddProduct>
    </QueryClientProvider>
  
    </>
  )
}

export default App
