/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable react/display-name */
import React from "react";
import MaterialTable from "material-table";
import { MyContext } from "../../../../components/App";

/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export default class Editable extends React.Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => (
            <>
              <MaterialTable
                icons={context.tableIcons}
                title="performance"
                localization={{
                  pagination: {
                    labelDisplayedRows: "{از}-{تا} of {تعداد}",
                  },
                  toolbar: {
                    nRowsSelected: "{0} انتخاب شده",
                  },
                  header: {
                    actions: "Actions",
                  },
                  body: {
                    emptyDataSourceMessage: "No records to display",
                    deleteTooltip: "مایل به حذف این ردیف می باشید؟",
                    filterRow: {
                      filterTooltip: "Filter",
                    },
                  },
                }}
                columns={[
                  { title: "KPI", field: "name" },
                  { title: "Weight", field: "surname" },
                  { title: "Not Achieved", field: "birthYear", type: "numeric" },
                  {
                    title: "Actual",
                    field: "birthCity",
                    lookup: { 34: "Tehran", 63: "Rasht" },
                  },
                ]}
                data={context.data}
                editable={{
                  onRowAdd: newData =>
                    new Promise((resolve: any) => {
                      setTimeout(() => {
                        {
                          const data = context.data;
                          data.push(newData);
                          this.setState({ data }, () => resolve());
                        }
                        resolve();
                      }, 1000);
                    }),
                  onRowUpdate: (newData: any, oldData: any) =>
                    new Promise((resolve: any) => {
                      setTimeout(() => {
                        {
                          const data = context.data;
                          const index = data.indexOf(oldData);
                          data[index] = newData;
                          this.setState({ data }, () => resolve());
                        }
                        resolve();
                      }, 1000);
                    }),
                  onRowDelete: oldData =>
                    new Promise((resolve: any) => {
                      setTimeout(() => {
                        {
                          let data = context.data;
                          const index = data.indexOf(oldData);
                          data.splice(index, 1);
                          this.setState({ data }, () => resolve());
                        }
                        resolve();
                      }, 1000);
                    }),
                }}
              />
              <div>{context.columns[0].title}</div>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
