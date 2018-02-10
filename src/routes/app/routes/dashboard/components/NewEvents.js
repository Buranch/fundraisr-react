import React from 'react';

class TableEvents extends React.Component {
  render() {
    return (
      <div className="box box-transparent">
        <div className="box-body no-padding-h">
          <div className="box box-default table-box mdl-shadow--2dp">
            <table className="mdl-data-table">
              <tbody>
                <tr className="bg-color-info">
                  <td><span className="dropcap">8</span></td>
                  <td style={{whiteSpace: 'normal'}} className="mdl-data-table__cell--non-numeric">
                    <b>Event</b> <br />
                    Event description text.
                  </td>
                </tr>
                <tr>
                  <td><span className="dropcap">15</span></td>
                  <td style={{whiteSpace: 'normal'}} className="mdl-data-table__cell--non-numeric ui-ribbon-container ui-ribbon-danger">
                    <div className="ui-ribbon-wrapper">
                      <div className="ui-ribbon">
                        High
                      </div>
                    </div>
                    <b>Another event</b> <br />
                    Other event description text, other event description text
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="dropcap">8</span>
                    <small>april</small>
                  </td>
                  <td style={{whiteSpace: 'normal'}} className="mdl-data-table__cell--non-numeric">
                    <b>Next month event</b> <br />
                    Another description event.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const newEvents = () => (
  <div className="box box-default ui-ribbon-container ui-ribbon-success">
    <div className="ui-ribbon-wrapper">
      <div className="ui-ribbon">
        3 new
      </div>
    </div>
    <div className="box-header">Next events</div>
    <div className="box-body">
      <TableEvents />
    </div>
  </div>
);

export default newEvents;

/*

            <div className="box box-default table-box mdl-shadow--2dp">
              <table className="mdl-data-table">
                <thead>
                  <tr>
                    <th className="mdl-data-table__cell--non-numeric">#</th>
                    <th className="mdl-data-table__cell--non-numeric">Material</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">1</td>
                    <td className="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                    <td>25</td>
                    <td>$2.90</td>
                  </tr>
                  <tr className="bg-color-info">
                    <td className="mdl-data-table__cell--non-numeric">2</td>
                    <td className="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                    <td>50</td>
                    <td>$1.25</td>
                  </tr>
                  <tr>
                    <td className="mdl-data-table__cell--non-numeric">3</td>
                    <td className="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                    <td>10</td>
                    <td>$2.35</td>
                  </tr>
                </tbody>
              </table>
            </div>
 */
