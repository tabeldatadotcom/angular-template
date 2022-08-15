import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AkunModel, Example } from 'src/app/models/Example';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from '../../home.service';
import { MatSort, Sort } from '@angular/material/sort';
import { DatatablesModelRequestParam } from 'src/app/models/utils/datatable.model';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.css']
})
export class ExamplePageComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;

  // Table config
  displayedColumns: string[] = ['position', 'id', 'namaAkun'];
  pageSizeOptions: number[] = [5, 10, 20];
  dataSource: MatTableDataSource<AkunModel> = new MatTableDataSource();
  
  // Datatables param initialisasi
  pageIndex: number = 0;
  pageSize: number = 5;
  orderCol: number = 0;
  orderDir: string = 'asc';
  params: DatatablesModelRequestParam = new DatatablesModelRequestParam();

  isLoading: boolean = false;

  constructor(
    private service: HomeService
  ) { }

  ngOnInit() {
    // Load Initial Data
    this.getData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getData() {
    // Loading bar
    this.isLoading = true;

    // Penetapan nilai datatables param
    this.params.limit = this.pageSize;
    this.params.start = this.pageIndex == 0 ? 0 : this.pageIndex * this.pageSize;
    this.params.orderCol = this.orderCol;
    this.params.orderDir = this.orderDir;

    console.log(this.params);

    this.service.datatables(this.params, null).subscribe(resp => {
      this.dataSource.data = resp.body.data;

      setTimeout(() => {
        this.paginator.pageIndex = this.pageIndex;
        this.paginator.length = resp.body.recordsTotal;
      })

      this.isLoading = false;
    })
  }

  pageChanged(event?: PageEvent) {
    console.log(event);

    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.getData();
  }

  sortChanged(sortState: Sort) {
    console.log(sortState);
    const index = this.displayedColumns.findIndex((item) => item == sortState.active);

    // get kolom index
    this.orderCol = index;
    this.orderDir = sortState.direction;

    // Load Data
    this.getData();
  }

}


