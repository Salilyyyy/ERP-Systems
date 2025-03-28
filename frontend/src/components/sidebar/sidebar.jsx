import React, { useState } from "react";
import "./sidebar.scss";
import DashboardIcon from "../../assets/img/Dashboard-icon.svg";
import InvoiceIcon from "../../assets/img/Invoice-icon.svg";
import ProductIcon from "../../assets/img/product-icon.svg";
import CustomerIcon from "../../assets/img/customer-icon.svg";
import StockIn from "../../assets/img/stockin-icon.svg";
import Shipping from "../../assets/img/shipping-icon.svg";
import Promotion from "../../assets/img/promotion-icon.svg";
import Setting from "../../assets/img/setting-icon.svg";
import Profile from "../../assets/img/profile-icon.svg";
import Logout from "../../assets/img/logout-icon.svg";
import Logo from "../../assets/img/logo.png";
import DownIcon from "../../assets/img/down-icon.svg";

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null); // State để theo dõi dropdown nào đang mở
    const [activeItem, setActiveItem] = useState("dashboard"); // State để theo dõi mục được chọn

    const toggleSubmenu = (key) => {
        setOpenSubmenu((prev) => (prev === key ? null : key));
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="sidebar">
            <div className="logo">
                <img className="logoIcon" src={Logo} alt="Logo" />
                <span>ERP SYSTEM</span>
            </div>
            <ul className="menu">
                <li
                    className={`menu-item ${activeItem === "dashboard" ? "active" : ""}`}
                    onClick={() => handleItemClick("dashboard")}
                >
                    <div className="menu-no">
                        <img className="icon" src={DashboardIcon} alt="Dashboard" />
                        <span>Tổng quan</span>
                    </div>
                </li>
                <li
                    className={`menu-item ${activeItem === "invoice" ? "active" : ""}`}
                    onClick={() => handleItemClick("invoice")}
                >
                    <div className="menu-no">
                        <img className="icon" src={InvoiceIcon} alt="Invoice" />
                        <span>Đơn hàng</span>
                    </div>
                </li>
                <li className="menu-item">
                    <div
                        className="menu-main"
                        onClick={() => toggleSubmenu("product")}
                    >
                        <div className="name">
                            <img className="icon" src={ProductIcon} alt="Product" />
                            <span>Sản phẩm</span>
                        </div>
                        <img
                            className={`downIcon ${openSubmenu === "product" ? "rotate" : ""}`}
                            src={DownIcon}
                            alt="DownIcon"
                        />
                    </div>
                    {openSubmenu === "product" && (
                        <ul className="submenu">
                            <li
                                className={activeItem === "product-list" ? "active" : ""}
                                onClick={() => handleItemClick("product-list")}
                            >
                                Danh sách sản phẩm
                            </li>
                            <li
                                className={activeItem === "product-category" ? "active" : ""}
                                onClick={() => handleItemClick("product-category")}
                            >
                                Danh sách loại sản phẩm
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`menu-item ${activeItem === "customer" ? "active" : ""}`}
                    onClick={() => handleItemClick("customer")}
                >
                    <div className="menu-no">
                        <img className="icon" src={CustomerIcon} alt="Customer" />
                        <span>Khách hàng</span>
                    </div>
                </li>
                <li className="menu-item">
                    <div
                        className="menu-main"
                        onClick={() => toggleSubmenu("stockIn")}
                    >
                        <div className="name">
                            <img className="icon" src={StockIn} alt="StockIn" />
                            <span>Nhập hàng</span>
                        </div>
                        <img
                            className={`downIcon ${openSubmenu === "stockIn" ? "rotate" : ""}`}
                            src={DownIcon}
                            alt="DownIcon"
                        />
                    </div>
                    {openSubmenu === "stockIn" && (
                        <ul className="submenu">
                            <li
                                className={activeItem === "supplier-list" ? "active" : ""}
                                onClick={() => handleItemClick("supplier-list")}
                            >
                                Danh sách nhà cung cấp
                            </li>
                            <li
                                className={activeItem === "stock-history" ? "active" : ""}
                                onClick={() => handleItemClick("stock-history")}
                            >
                                Lịch sử nhập hàng
                            </li>
                        </ul>
                    )}
                </li>
                <li className="menu-item">
                    <div
                        className="menu-main"
                        onClick={() => toggleSubmenu("shipping")}
                    >
                        <div className="name">
                            <img className="icon" src={Shipping} alt="Shipping" />
                            <span>Vận chuyển</span>
                        </div>
                        <img
                            className={`downIcon ${openSubmenu === "shipping" ? "rotate" : ""}`}
                            src={DownIcon}
                            alt="DownIcon"
                        />
                    </div>
                    {openSubmenu === "shipping" && (
                        <ul className="submenu">
                            <li
                                className={activeItem === "post-office" ? "active" : ""}
                                onClick={() => handleItemClick("post-office")}
                            >
                                Danh sách bưu cục
                            </li>
                            <li
                                className={activeItem === "shipping-list" ? "active" : ""}
                                onClick={() => handleItemClick("shipping-list")}
                            >
                                Danh sách vận đơn
                            </li>
                        </ul>
                    )}
                </li>
                <li
                    className={`menu-item ${activeItem === "promotion" ? "active" : ""}`}
                    onClick={() => handleItemClick("promotion")}
                >
                    <div className="menu-no">
                        <img className="icon" src={Promotion} alt="Promotion" />
                        <span>Khuyến mãi</span>
                    </div>
                </li>
            </ul>

            <div className="down-sidebar">
                <li
                    className={`menu-item ${activeItem === "setting" ? "active" : ""}`}
                    onClick={() => handleItemClick("setting")}
                >
                    <div className="menu-no">
                        <img className="icon" src={Setting} alt="Setting" />
                        <span>Cài đặt</span>
                    </div>
                </li>
                <li
                    className={`menu-item ${activeItem === "profile" ? "active" : ""}`}
                    onClick={() => handleItemClick("profile")}
                >
                    <div className="menu-no">
                        <img className="icon" src={Profile} alt="Profile" />
                        <span>Hồ sơ cá nhân</span>
                    </div>
                </li>
                <li
                    className={`menu-item logout ${activeItem === "logout" ? "active" : ""}`}
                    onClick={() => handleItemClick("logout")}
                >
                    <div className="menu-no">
                        <img className="icon" src={Logout} alt="Logout" />
                        <span>Đăng xuất</span>
                    </div>
                </li>
            </div>
        </div>
    );
};

export default Sidebar;