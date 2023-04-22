import Admin from "./pages/Admin";
import {
    ADMIN_PATH,
    BASKET_PATH,
    DEVICE_PATH, LICENSE_AG_PATH, LICENSE_PATH,
    LOGIN_PATH, PRODUCT_PATH, PRODUCTS_PATH,
    REGISTRATION_PATH,
    SHOP_PATH,
    TEST_PATH
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/old/Shop";
import DevicePage from "./pages/old/DevicePage";
import Auth from "./pages/Auth";
import Test from "./pages/Test";
import AgreementForm from "./pages/old/AgreementForm";
import AgrementFormAgressive from "./pages/old/AgrementFormAgressive";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";

export const authRoutes = [
    {path: ADMIN_PATH, Component: Admin},
    {path: BASKET_PATH, Component: Basket},
    //{ path: "*", element: Error, exact: false }
]


export const publicRoutes = [
    {path: SHOP_PATH, Component: Shop},
    {path: LOGIN_PATH, Component: Auth},
    {path: REGISTRATION_PATH, Component: Auth},
    {path: DEVICE_PATH + '/:id', Component: DevicePage},
    {path: TEST_PATH, Component: Test},
    {path: LICENSE_PATH, Component: AgreementForm},
    {path: LICENSE_AG_PATH, Component: AgrementFormAgressive},
    {path: PRODUCTS_PATH, Component: Products},
    {path: PRODUCT_PATH + '/:id', Component: ProductPage},
]