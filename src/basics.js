import { Specimen } from '@michaeldrogalis/specimen/dist/specimen';
import { baseStyles, flavors } from './common';

// const flavors = [
//   "#0074A2",
//   "#F26135",
//   "#FFC40C"
// ];

const input_partitions = [
  [
    { key: "sensor-1", value: { reading: 45, location: "wheel" }, t: 11 },
    { key: "sensor-2", value: { reading: 41, location: "motor" }, t: 25 },
    { key: "sensor-1", value: { reading: 42, location: "wheel" }, t: 34 },
    { key: "sensor-3", value: { reading: 42, location: "muffler" }, t: 42 },
    { key: "sensor-3", value: { reading: 40, location: "muffler" }, t: 45 }
  ],
  [
    { key: "sensor-4", value: { reading: 43, location: "motor" }, t: 10 },
    { key: "sensor-6", value: { reading: 43, location: "muffler" }, t: 26 },
    { key: "sensor-5", value: { reading: 41, location: "wheel" }, t: 31 },
    { key: "sensor-5", value: { reading: 42, location: "wheel" }, t: 43 },
    { key: "sensor-4", value: { reading: 41, location: "motor" }, t: 57 },
  ],
  [
    { key: "sensor-7", value: { reading: 43, location: "muffler" }, t: 12 },
    { key: "sensor-8", value: { reading: 40, location: "wheel" }, t: 22 },
    { key: "sensor-9", value: { reading: 40, location: "motor" }, t: 30 },
    { key: "sensor-9", value: { reading: 44, location: "motor" }, t: 55 },
    { key: "sensor-7", value: { reading: 41, location: "muffler" }, t: 53 }
  ]
];

export function stream(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 275,

    pq_width: 150,
    pq_height: 150,
    pq_margin_top: 50,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,

    part_width: 200,
    part_height: 50,
    part_margin_bottom: 20,
    part_id_margin_left: -15,
    part_id_margin_top: 15,

    row_width: 15,
    row_height: 15,
    row_margin_left: 8,
    row_offset_right: 10,

    render_controls: false
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.render();
}

export function inserts(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 275,

    pq_width: 150,
    pq_height: 150,
    pq_margin_top: 50,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,

    part_width: 200,
    part_height: 50,
    part_margin_bottom: 20,
    part_id_margin_left: -15,
    part_id_margin_top: 15,

    row_width: 15,
    row_height: 15,
    row_margin_left: 8,
    row_offset_right: 10,

    render_controls: false
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions
  });

  s.render();
}

export function transformation(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 325,

    pq_width: 150,
    pq_height: 150,
    pq_margin_top: 0,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,

    part_width: 200,
    part_height: 50,
    part_margin_bottom: 20,
    part_id_margin_left: -15,
    part_id_margin_top: 15,

    row_width: 15,
    row_height: 15,
    row_margin_left: 8,
    row_offset_right: 10,

    ms_px: 5
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions
  });

  s.add_child(["readings"], {
    name: "pq1",
    kind: "persistent_query",
    into: "clean",
    query_text: [
      "CREATE STREAM clean AS",
      "    SELECT sensor,",
      "           reading,",
      "           UCASE(location) AS location",
      "    FROM readings",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { value } = row;

      const v = {
        reading: value.reading,
        country: value.location.toUpperCase()
      }

      return { ...row, ... { value: v } };
    },
    style: {
      fill: function(before_row, after_row) {
        console.log(flavors[before_row.value.location.hashCode() % flavors.length]);
        return flavors[before_row.value.location.hashCode() % flavors.length];
      }
    }
  });

  s.add_child(["pq1"], {
    name: "clean",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.render();
}

export function filtering(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 230,

    pq_width: 75,
    pq_height: 75,
    pq_margin_top: 0,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,

    part_width: 100,
    part_height: 25,
    part_margin_bottom: 30,
    part_id_margin_left: -15,
    part_id_margin_top: 3,

    row_width: 10,
    row_height: 10,
    row_margin_left: 8,
    row_offset_right: 8,

    ms_px: 5
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions
  });

  s.add_child(["readings"], {
    name: "pq1",
    kind: "persistent_query",
    into: "clean",
    query_text: [
      "CREATE STREAM clean AS",
      "    SELECT sensor,",
      "           reading,",
      "           UCASE(location) AS location",
      "    FROM readings",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { value } = row;

      const v = {
        reading: value.reading,
        location: value.location.toUpperCase()
      }

      return { ...row, ... { value: v } };
    },
    style: {
      fill: function(before_row, after_row) {
        return flavors[before_row.value.location.hashCode() % flavors.length];
      }
    }
  });

  s.add_child(["pq1"], {
    name: "clean",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.add_child(["clean"], {
    name: "pq2",
    kind: "persistent_query",
    into: "high_readings",
    query_text: [
      "CREATE STREAM high_readings AS",
      "    SELECT sensor, reading, location",
      "    FROM clean",
      "    WHERE reading > 41",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { value } = row;

      const v = {
        reading: value.reading,
        location: value.location.toUpperCase()
      }

      return { ...row, ... { value: v } };
    },
    where: function(context, row) {
      return row.value.reading > 41;
    },
  });

  s.add_child(["pq2"], {
    name: "high_readings",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });
  
  s.render();
}

export function compressed(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 230,

    pq_width: 100,
    pq_height: 100,
    pq_margin_top: 0,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,

    part_width: 150,
    part_height: 25,
    part_margin_bottom: 30,
    part_id_margin_left: -15,
    part_id_margin_top: 3,

    row_width: 10,
    row_height: 10,
    row_margin_left: 8,
    row_offset_right: 8,

    ms_px: 5
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions
  });

  s.add_child(["readings"], {
    name: "pq1",
    kind: "persistent_query",
    into: "high_pri",
    query_text: [
      "CREATE STREAM high_pri AS",
      "    SELECT sensor,",
      "           reading,",
      "           UCASE(location) AS location",
      "    FROM readings",
      "    WHERE reading > 41",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { value } = row;

      const v = {
        reading: value.reading,
        location: value.location.toUpperCase()
      }

      return { ...row, ... { value: v } };
    },
    where: function(context, row) {
      return row.value.reading > 41;
    },
    style: {
      fill: function(before_row, after_row) {
        return flavors[before_row.value.location.hashCode() % flavors.length];
      }
    }
  });

  s.add_child(["pq1"], {
    name: "high_pri",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });
  
  s.render();
}

export function rekeying(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 220,

    pq_width: 75,
    pq_height: 75,
    pq_margin_top: 50,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,

    part_width: 100,
    part_height: 25,
    part_margin_bottom: 30,
    part_id_margin_left: -15,
    part_id_margin_top: 3,

    row_width: 10,
    row_height: 10,
    row_margin_left: 8,
    row_offset_right: 8,

    ms_px: 5
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions
  });

  s.add_child(["readings"], {
    name: "pq1",
    kind: "persistent_query",
    into: "high_pri",
    query_text: [
      "CREATE STREAM high_pri AS",
      "    SELECT sensor,",
      "           reading,",
      "           UCASE(location) AS location",
      "    FROM readings",
      "    WHERE reading > 41",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { value } = row;

      const v = {
        reading: value.reading,
        location: value.location.toUpperCase()
      }

      return { ...row, ... { value: v } };
    },
    where: function(context, row) {
      return row.value.reading > 41;
    },
    style: {
      fill: function(before_row, after_row) {
        return flavors[before_row.value.location.hashCode() % flavors.length];
      }
    }
  });

  s.add_child(["pq1"], {
    name: "high_pri",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.add_child(["high_pri"], {
    name: "pq2",
    kind: "persistent_query",
    into: "by_location",
    query_text: [
      "CREATE STREAM by_location AS",
      "    SELECT *",
      "    FROM high_pri",
      "    PARTITION BY location",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { key, value } = row;

      const v = {
        reading: value.reading,
        sensor: key
      }

      return { ...row, ... { value: v } };
    },
    partition_by: function(context, before_row, after_row) {
      return before_row.value.location;
    }
  });

  s.add_child(["pq2"], {
    name: "by_location",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.render();
}

export function consumers(container) {
  const styles = {
    ...baseStyles,
    svg_width: 750,
    svg_height: 675,

    pq_width: 75,
    pq_height: 75,
    pq_margin_top: 0,
    pq_label_margin_left: 0,
    pq_label_margin_bottom: 10,
    pq_top_offset_by_index: [0, 280],


    coll_label_margin_bottom: 50,

    part_width: 100,
    part_height: 25,
    part_margin_bottom: 60,
    part_id_margin_left: -15,
    part_id_margin_top: 3,

    row_width: 10,
    row_height: 10,
    row_margin_left: 8,
    row_offset_right: 8,

    ms_px: 5
  };

  const s = new Specimen(container, styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions
  });

  s.add_child(["readings"], {
    name: "pq1",
    kind: "persistent_query",
    into: "high_pri",
    query_text: [
      "CREATE STREAM high_pri AS",
      "    SELECT sensor,",
      "           reading,",
      "           UCASE(location) AS location",
      "    FROM readings",
      "    WHERE reading > 41",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { value } = row;

      const v = {
        reading: value.reading,
        location: value.location.toUpperCase()
      }

      return { ...row, ... { value: v } };
    },
    where: function(context, row) {
      return row.value.reading > 41;
    },
    style: {
      fill: function(before_row, after_row) {
        return flavors[before_row.value.location.hashCode() % flavors.length];
      }
    }
  });

  s.add_child(["pq1"], {
    name: "high_pri",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.add_child(["high_pri"], {
    name: "pq2",
    kind: "persistent_query",
    into: "by_location",
    query_text: [
      "CREATE STREAM by_location AS",
      "    SELECT *",
      "    FROM high_pri",
      "    PARTITION BY location",
      "    EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { key, value } = row;

      const v = {
        reading: value.reading,
        sensor: key
      }

      return { ...row, ... { value: v } };
    },
    partition_by: function(context, before_row, after_row) {
      return before_row.value.location;
    }
  });

  s.add_child(["pq2"], {
    name: "by_location",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });

  s.add_child(["high_pri"], {
    name: "pq3",
    kind: "persistent_query",
    into: "by_zone",
    query_text: [
      "CREATE STREAM s1_by_location AS",
      "  SELECT sensor,",
      "         reading,",
      "         UCASE(location) AS location",
      "  FROM s2",
      "  EMIT CHANGES;"
    ],
    select: function(context, row) {
      const { key, value } = row;

      const v = {
        reading: value.reading,
        sensor: key
      }

      return { ...row, ... { value: v } };
    },
    partition_by: function(context, before_row, after_row) {
      return (before_row.value.location + " ");
    }
  });

  s.add_child(["pq3"], {
    name: "by_zone",
    kind: "stream",
    partitions: [
      [],
      [],
      []
    ]
  });
  
  s.render();
}
