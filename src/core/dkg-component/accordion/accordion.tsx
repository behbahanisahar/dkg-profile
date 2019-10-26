import * as React from "react";
import "./accordion.css";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";

export interface DKAccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
}

export function DKAccordion({ children, title = "", ...other }: DKAccordionProps) {
  return (
    <ExpansionPanel className="accordion card">
      <ExpansionPanelSummary className="card-header" aria-controls="panel1a-content" id="panel1a-header">
        <div className="card-title">{title}</div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
