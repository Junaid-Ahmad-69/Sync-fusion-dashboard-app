import {
    GridComponent,
    ColumnsDirective,
    Resize,
    Sort,
    ContextMenu,
    Filter,
    Page,
    ExcelExport,
    PdfExport,
    Edit,
    Inject, ColumnDirective,
} from "@syncfusion/ej2-react-grids";
import {ordersData, contextMenuItems, ordersGrid} from "../data/dummy";
import {Header} from "../Components"

const Order = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Order"/>
            <GridComponent id="gridcomp"
             dataSource={ordersData}
            allowPaging
            allowSorting>
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]}/>
            </GridComponent>
        </div>
    )
}

export default Order
