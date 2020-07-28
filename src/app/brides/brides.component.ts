import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-brides',
  templateUrl: './brides.component.html',
  styleUrls: ['./brides.component.css']
})
export class BridesComponent implements OnInit {

  public data = [
    {favourite: '1', regno: 'RB100010', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100011', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100012', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100013', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100014', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100015', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100016', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100017', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100018', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100019', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100020', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100021', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100022', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100023', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100024', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100025', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100026', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },

    {favourite: '1', regno: 'RB100027', regdate:'2020-04-14', dob:'1995-04-14', 
    education:'Engineer', residence:'Beed', occupation:'Private Service' },
];

dtOptions: DataTables.Settings = {};

constructor() { }

ngOnInit() {

  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true
  };
}


}
