import React from 'react';
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onTouchTap` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class ChipExampleArray extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chipData: [
      {key: 0, label: 'Gluten Free'},
      {key: 1, label: 'Vegetarian'},
      {key: 2, label: 'Vegan'},
      {key: 3, label: 'Pescatarian'},
      {key: 4, label: 'Dairy Free'},
      {key: 5, label: 'Wheat Free'},
      {key: 6, label: 'Egg Free'},
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: '6%',
        paddingTop: '10%',
        paddingBottom: '11%'
      },
    };
  }

  handleRequestDelete (key) {
    if (key === 3) {
      //alert('Why would you want to delete React?! :)');
      return;
    }

    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        onRequestDelete={() => this.handleRequestDelete(data.key)}
        style={this.styles.chip}
      >
        {data.label}
      </Chip>
    );
  }

  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.chipData.map(this.renderChip, this)}
      </div>
    );
  }
}