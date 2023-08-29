import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {Navbar, Footer, Sidebar, ThemeSettings, LineChart} from "./Components"
import "./App.css"
import {
    Ecommerce,
    Order,
    Calendar,
    Employees,
    Stacked,
    Pyramid,
    Customers,
    Kanban,
    Area,
    Bar,
    Pie,
    Financial,
    ColorPicker,
    ColorMapping,
    Editor
} from "./pages";
import {useStateContext} from "./contexts/ContextProvider";

const App = () => {
    const {activeMenu} = useStateContext()
    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-bg">
                    <div className="fixed right-4 bottom-4">
                        <TooltipComponent content="Settings" position="TopCenter">
                            <button type="button" className="p-3 text-3xl
                            hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full"
                                    style={{background: "blue"}}>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ?
                        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white"><Sidebar/></div> :
                        <div className="w-0 dark:bg-seconday-dark-bg"><Sidebar/></div>

                    }
                    <div
                        className={`dark:bg-main-bg min-h-screen bg-main-bg  w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
                        <div className="fixed md:static navbar w-full bg-main-bg dark:bg-main-dark-bg ">
                            <Navbar/>
                        </div>

                        <div>
                            <Routes>
                                {/*Dashboard*/}
                                <Route path="/" element={<Ecommerce/>}/>
                                <Route path="/ecommerce" element={<Ecommerce/>}/>

                                {/*Pages*/}
                                <Route path="/orders" element={<Order/>}/>
                                <Route path="/employees" element={<Employees/>}/>
                                <Route path="/customers" element={<Customers/>}/>


                                {/*Apps*/}
                                <Route path="/kanban" element={<Kanban/>}/>
                                <Route path="/editor" element={<Editor/>}/>
                                <Route path="/calendar" element={<Calendar/>}/>
                                <Route path="/color-picker" element={<ColorPicker/>}/>

                                {/*Charts*/}
                                <Route path="/line" element={<LineChart/>}/>
                                <Route path="/area" element={<Area/>}/>
                                <Route path="/bar" element={<Bar/>}/>
                                <Route path="/pie" element={<Pie/>}/>
                                <Route path="/financial" element={<Financial/>}/>
                                <Route path="/color-mapping" element={<ColorMapping/>}/>
                                <Route path="/pyramid" element={<Pyramid/>}/>
                                <Route path="/stacked" element={<Stacked/>}/>
                            </Routes>
                        </div>
                    </div>

                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
