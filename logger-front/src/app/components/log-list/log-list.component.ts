import { RepositoryService } from "../../shared/repository.service";
import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { Log } from "../../models/log.model";

@Component({
  selector: "log-list",
  templateUrl: "./log-list.component.html",
  styleUrls: ["./log-list.component.css"]
})
export class LogListComponent implements OnInit, AfterViewInit {
  public displayedColumns = [
    "title",
    "description",
    "statusCode",
    "logPath",
    "createdAt"
  ];
  public dataSource = new MatTableDataSource<Log>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.getAllLogs();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllLogs = () => {
    this.repoService.getData("api/logs").subscribe(res => {
      console.log(res);
      this.dataSource.data = res as Log[];
    });
  };

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public redirectToDetails = (id: string) => {};
}
