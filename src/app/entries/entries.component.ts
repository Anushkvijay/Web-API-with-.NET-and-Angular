import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { MatTableDataSource } from '@angular/material/table';
import { EntryElement } from '../Interfaces/EntryElement';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})

export class EntriesComponent implements OnInit {
  
  displayedColumns: string[] = ['Description','IsExpense','Value']
  dataSource;
  constructor(private service:EntryService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      console.log(data);
      this.dataSource = new MatTableDataSource<EntryElement>(data as EntryElement[]);
    })
  }

}
