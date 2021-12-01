import { Story, Meta } from '@storybook/angular/types-6-0';
import AppComponent from '../app/app.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import {MatTableDataSource} from '@angular/material/table';

export default {
  title: 'Example/Table',
  component: AppComponent,
  decorators: [
		moduleMetadata({
			declarations: [AppComponent],
			imports: [
				BrowserAnimationsModule,
				MatTableModule
			],
		}),
	]
} as Meta;

const Template: Story<AppComponent> = (args) => ({
	props: args
});
const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
const dataSource = new MatTableDataSource(ELEMENT_DATA);

export const Primary = Template.bind({});
Primary.args = {
  test: dataSource
}


