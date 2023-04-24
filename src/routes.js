import AdminShop from "./pages/AdminShop";
import {
    ADMIN_PATH,
    BASKET_PATH, BRAND_PATH,
    DEVICE_PATH, ITEMTYPE_PATH, LICENSE_AG_PATH, LICENSE_PATH,
    LOGIN_PATH, ORDER_PATH, PET_PATH, PRODUCT_PATH, PRODUCTS_PATH,
    REGISTRATION_PATH,
    SHOP_PATH,
    TEST_PATH, USER_PATH
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/old/Shop";
import DevicePage from "./pages/old/DevicePage";
import Auth from "./pages/Auth";
import Brand from "./pages/Brand";
import AgreementForm from "./pages/old/AgreementForm";
import AgrementFormAgressive from "./pages/old/AgrementFormAgressive";
import ProductPage from "./pages/ProductPage";
import Products from "./pages/Products";
import Test from "./pages/old/Test";
import User from "./pages/User";
import Pet from "./pages/Pet";
import Item_type from "./pages/Item_type";
import Order from "./pages/Order";

export const authRoutes = [
    {path: ADMIN_PATH, Component: AdminShop},
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
    {path: BRAND_PATH, Component: Brand},
    {path: USER_PATH, Component: User},
    {path: PET_PATH, Component: Pet},
    {path: ITEMTYPE_PATH, Component: Item_type},
    {path: ORDER_PATH, Component: Order},
]