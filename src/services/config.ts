export default class Config {
  public LocalEndpoint: string = "http://hq-spsrv03:90/_layouts/api";
  public headers = { "Content-Type": "application/json" };
  public PDFheaders = { "Content-Type": "application/PDF" };
}
