import * as React from "react";
import { AppContextConsumer } from "../../../../components/App/AppState";
import Launch from "@material-ui/icons/Launch";
import UserTasks from "../../../../entities/UserTasks";
import { MDBTableHead, MDBTableBody, MDBTable, MDBCard, MDBCardHeader, MDBCardBody } from "mdbreact";
import "../Tasks-cartable/TaskCartable.css";

class TaskCartable extends React.Component<{}, object> {
  //  private tableHeaders: TableHeader[];
  public constructor(props: any) {
    super(props);
    // this.tableHeaders = [{ id: "Row", label: "Row" }, { id: "Module", label: "Module" }, { id: "Url", label: "Task" }];
  }
  public async componentDidMount() {}
  public render() {
    return (
      <AppContextConsumer>
        {context => (
          <>
            {/* <Paper style={{ width: "60%", margin: "1% auto" }}>
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th>Row</th>
                    <th>Module</th>
                    <th>Url</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>{this.onRenderHistoryRows(context.Tasks)}</MDBTableBody>
              </MDBTable>
            </Paper> */}
            <div className="App">
              <MDBCard className="mdb-card" narrow>
                <MDBCardHeader className="view view-cascade gradient-card-header task-header d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
                  {/* <div>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                      <i className="fa fa-th-large mt-0"></i>
                    </MDBBtn>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                      <i className="fa fa-columns mt-0"></i>
                    </MDBBtn>
                  </div> */}
                  <a href="#" className="white-text mx-3">
                    Tasks Cartable
                  </a>
                  {/* <div>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                      <i className="fas fa-pencil-alt mt-0"></i>
                    </MDBBtn>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                      <i className="fas fa-times mt-0"></i>
                    </MDBBtn>
                    <MDBBtn outline rounded size="sm" color="white" className="px-2">
                      <i className="fa fa-info-circle mt-0"></i>
                    </MDBBtn>
                  </div> */}
                </MDBCardHeader>
                <MDBCardBody cascade>
                  <MDBTable btn fixed>
                    <MDBTableHead>
                      <tr>
                        <th>Row</th>
                        <th>Module</th>
                        <th>Url</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>{this.onRenderHistoryRows(context.Tasks)}</MDBTableBody>
                  </MDBTable>
                </MDBCardBody>
              </MDBCard>
            </div>
          </>
        )}
      </AppContextConsumer>
    );
  }
  /**************************** Repeat Table ****************************** */
  // private renderHistoryHeader = (columnDetail: any[]) => {
  //   return columnDetail.map(
  //     row => (
  //       <TableCell className="LogPadding" key={row.id} align="center" padding="none" sortDirection="desc">
  //         {row.label}
  //       </TableCell>
  //     ),
  //     this,
  //   );
  // };

  private onRenderHistoryRows = (TaskItems: UserTasks[]) => {
    return TaskItems.map((n: UserTasks, index: any) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{n.Module}</td>
          <td>
            <Launch />
            <a href={n.Url}>{n.Title}</a>
          </td>
        </tr>
      );
    });
  };
}

export default TaskCartable;
