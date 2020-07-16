import React, { Component } from "react";
import "./dashboard.scss";
import Card from "../../Components/Card/index";
import DashboardLayout from "../../Components/DashboardLayout";
import { Tooltip, AreaChart, Area, ResponsiveContainer } from "recharts";
import chartData from "./chartdata";
import payments from "./tabledata";
import Table from "../../Components/Table/index";
class Dashboard extends Component {
  state = {
    payments,
    chartData
  };
  render() {
    const { payments, chartData } = this.state;
    return (
      <DashboardLayout>
        <>
          <div className="dashboard__cards">
            <Card label={"Daily Transaction Volume"} value={"2,342"} />
            <Card label={"Daily Transaction Value"} value={"₦4,000,000"} />
            <Card label={"Total Transaction Volume"} value={"452,000"} />
            <Card label={"Total Transaction Value"} value={"₦4,000,000"} />
          </div>
          <div className="dashboard__stat">
            <div className="dashboard__stat-graph">
              <div className="dashboard__stat-graph-details">
                <h3>Today: 5, Aug 2018</h3>
                <div class="flex">
                  <div class="custom-select stat-select">
                    <select>
                      <option value="0">1Jan - 1Jun</option>
                      <option value="12">1Feb - 1Dec</option>
                    </select>
                  </div>
                  <div className="next-prev-buttons">
                    <button className="btn">&lt;</button>
                    <button className="btn">&gt;</button>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="rgba(2, 148, 255, 0.45)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="rgba(255, 255, 255, 0.0001)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="rgba(2, 148, 255, 0.45)"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="rgba(2, 148, 255, 0.45)"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="dashboard__stat-info orders">
              <h4>Orders</h4>
              <div className="progress" />
              <p>
                Pending Orders: <span className="bold text-yellow">20</span>
              </p>
              <p>
                Reconcilled Orders: <span className="bold text-blue">80</span>
              </p>
              <p>
                Total Orders: <span className="bold text-green">100</span>
              </p>
            </div>
            <div className="dashboard__stat-info payments">
              <h4>Payments</h4>
              <div className="progress" />
              <p>
                Pending Payments: <span className="bold text-yellow">20</span>
              </p>
              <p>
                Reconcilled Payments: <span className="bold text-blue">80</span>
              </p>
              <p>
                Total Payments: <span className="bold text-green">100</span>
              </p>
            </div>
          </div>
          <div className="dashboard__payment">
            <h2 className="dashboard__payment-heading">Payments</h2>
            <div className="dashboard__payment-options">
              <p>
                <span>Showing</span>
                <span>
                  <span>20</span>
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 1L4.5 5L1 1" stroke="#1875F0" />
                  </svg>
                </span>

                <span>out of 500 payments</span>
              </p>
              <div className="relative">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search payments"
                />
                <svg
                  width="12"
                  className="search-icon"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.626 11.0884L10.7144 11.1768L10.8028 11.0884L11.0884 10.8028L11.1768 10.7144L11.0884 10.626L7.84034 7.37797C8.47823 6.62458 8.81189 5.6582 8.77268 4.66895C8.73191 3.64011 8.29105 2.66785 7.54401 1.95926C6.79697 1.25067 5.80279 0.86175 4.77323 0.875345C3.74368 0.88894 2.76011 1.30397 2.03204 2.03204C1.30397 2.76011 0.88894 3.74368 0.875345 4.77323C0.86175 5.80279 1.25067 6.79697 1.95926 7.54401C2.66785 8.29105 3.64011 8.73191 4.66895 8.77268C5.6582 8.81189 6.62458 8.47823 7.37797 7.84034L10.626 11.0884ZM2.99578 2.08488C3.53901 1.72433 4.177 1.53309 4.82898 1.53538C5.70031 1.53949 6.53462 1.88825 7.14967 2.50547C7.76473 3.12271 8.11053 3.95827 8.11155 4.82964C8.11152 5.4816 7.91802 6.11889 7.55557 6.66081C7.19309 7.20278 6.67793 7.62498 6.07533 7.87396C5.47273 8.12294 4.8098 8.18749 4.17049 8.05944C3.53118 7.93139 2.94425 7.6165 2.48402 7.15465C2.0238 6.69279 1.71098 6.10475 1.5852 5.46499C1.45941 4.82523 1.5263 4.16253 1.77741 3.56081C2.02852 2.9591 2.45254 2.44544 2.99578 2.08488Z"
                    fill="#787878"
                    stroke="#787878"
                    stroke-width="0.25"
                  />
                </svg>
              </div>
              <div class="custom-select">
                <select>
                  <option value="0">All</option>
                  <option value="1">Reconcilled</option>
                  <option value="2">UnReconcilled</option>
                  <option value="12">Settled</option>
                  <option value="12">UnSettled</option>
                </select>
              </div>
            </div>
            <Table tableData={payments} />
          </div>
        </>
      </DashboardLayout>
    );
  }
}

export default Dashboard;