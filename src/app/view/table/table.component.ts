import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(element_data);

  data: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  async getInfo() {
    this.data = this.userService.getData();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  name: string;
  lastName: string;
  age: number;
  status: boolean;
}

const element_data: PeriodicElement[] = [
  {
    id: 1,
    name: 'Ivan',
    lastName: 'Garcia',
    age: 21,
    status: true,
  },
  {
    id: 2,
    name: 'Samuel',
    lastName: 'Reyna',
    age: 20,
    status: true,
  },
  {
    id: 3,
    name: 'Paola',
    lastName: 'Herrera',
    age: 21,
    status: false,
  },
  {
    id: 5,
    name: 'Juan',
    lastName: 'Pérez',
    age: 28,
    status: true,
  },
  {
    id: 6,
    name: 'María',
    lastName: 'López',
    age: 34,
    status: false,
  },
  {
    id: 7,
    name: 'Carlos',
    lastName: 'García',
    age: 22,
    status: true,
  },
  {
    id: 8,
    name: 'Ana',
    lastName: 'Martínez',
    age: 41,
    status: false,
  },
  {
    id: 9,
    name: 'Luis',
    lastName: 'Rodríguez',
    age: 30,
    status: true,
  },
];
