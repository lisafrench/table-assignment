# Table Assignment

## About

This is a repo for a job interview assignment. Any references to the company are not included in this work.

## Assignment Requirements

### MockUp

![Mockup image](https://github.com/lisafrench/table-assignment/blob/main/mockup_image.png?raw=true)

### Data

The component is given the following data:

```
[
  {
    "name": "smss.exe",
    "device": "Stark",
    "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    "status": "scheduled"
  },
  {
    "name": "netsh.exe",
    "device": "Targaryen",
    "path": "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
    "status": "available"
  },
  {
    "name": "uxtheme.dll",
    "device": "Lanniester",
    "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
    "status": "available"
  },
  {
    "name": "cryptbase.dll",
    "device": "Martell",
    "path": "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
    "status": "scheduled"
  },
  {
    "name": "7za.exe",
    "device": "Baratheon",
    "path": "\\Device\\HarddiskVolume1\\temp\\7za.exe",
    "status": "scheduled"
  }
]
```

### Requirements

- Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
- The select-all checkbox should be in an unselected state if no items are selected.
- The select-all checkbox should be in a selected state if all items are selected.
- The select-all checkbox should be in an indeterminate state if some but not all items are selected.
- The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
- Clicking the select-all checkbox should select all items if none or some are selected.
- Clicking the select-all checkbox should de-select all items if all are currently selected.
- Status should be correctly formatted
- Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
- Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.

## Instructions to Run This Project

- Clone the repo via HTTP or SSH:
  - HTTP = `git clone https://github.com/lisafrench/table-assignment.git`
  - SSH = `git clone git@github.com:lisafrench/table-assignment.git`
- Open a terminal
- Navigate to the project by running `cd _path_to_project_here`
- Install package dependencies by running the command `npm i`
- View the project in a browser by running the command `npm run dev`
- Open the browser to [http://localhost:5173/](http://localhost:5173/)
