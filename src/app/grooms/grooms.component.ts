import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grooms',
  templateUrl: './grooms.component.html',
  styleUrls: ['./grooms.component.css']
})
export class GroomsComponent implements OnInit {
  
  public data = [
    {favourite: '1', regno: 'RG100010', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100011', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100012', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100013', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100014', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100015', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100016', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100017', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100018', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100019', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100020', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100021', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100022', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100023', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100024', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100025', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100026', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RG100027', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },
];

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
  }

}
