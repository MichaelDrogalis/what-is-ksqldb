import { Specimen } from "@michaeldrogalis/specimen/dist/specimen";
import { baseStyles, flavors } from "./common";

const input_partitions = [
  [
    { key: "sensor-1", value: { reading: 20, area: "wheel" }, t: 17 },
    { key: "sensor-1", value: { reading: 29, area: "motor" }, t: 23 },
    { key: "sensor-1", value: { reading: 23, area: "wheel" }, t: 32 },
    { key: "sensor-1", value: { reading: 28, area: "engine" }, t: 44 },
    { key: "sensor-1", value: { reading: 21, area: "engine" }, t: 51 },
  ],
  [
    {
      key: "sensor-2",
      value: { reading: 64, area: "motor" },
      t: 12,
      style: { fill: "#F26135" },
    },
    {
      key: "sensor-2",
      value: { reading: 62, area: "motor" },
      t: 21,
      style: { fill: "#F26135" },
    },
    {
      key: "sensor-2",
      value: { reading: 68, area: "wheel" },
      t: 31,
      style: { fill: "#F26135" },
    },
    {
      key: "sensor-2",
      value: { reading: 61, area: "engine" },
      t: 43,
      style: { fill: "#F26135" },
    },
    {
      key: "sensor-2",
      value: { reading: 64, area: "motor" },
      t: 50,
      style: { fill: "#F26135" },
    },
  ],
  [
    {
      key: "sensor-3",
      value: { reading: 46, area: "engine" },
      t: 13,
      style: { fill: "#0074A2" },
    },
    {
      key: "sensor-3",
      value: { reading: 54, area: "wheel" },
      t: 24,
      style: { fill: "#0074A2" },
    },
    {
      key: "sensor-3",
      value: { reading: 45, area: "wheel" },
      t: 30,
      style: { fill: "#0074A2" },
    },
    {
      key: "sensor-3",
      value: { reading: 53, area: "motor" },
      t: 45,
      style: { fill: "#0074A2" },
    },
    {
      key: "sensor-3",
      value: { reading: 51, area: "engine" },
      t: 57,
      style: { fill: "#0074A2" },
    },
  ],
  [
    {
      key: "sensor-4",
      value: { reading: 16, area: "motor" },
      t: 16,
      style: { fill: "#FFC40C" },
    },
    {
      key: "sensor-4",
      value: { reading: 24, area: "wheel" },
      t: 26,
      style: { fill: "#FFC40C" },
    },
    {
      key: "sensor-4",
      value: { reading: 17, area: "motor" },
      t: 37,
      style: { fill: "#FFC40C" },
    },
    {
      key: "sensor-4",
      value: { reading: 18, area: "engine" },
      t: 42,
      style: { fill: "#FFC40C" },
    },
    {
      key: "sensor-4",
      value: { reading: 25, area: "motor" },
      t: 55,
      style: { fill: "#FFC40C" },
    },
  ],
  [
    {
      key: "sensor-5",
      value: { reading: 90, area: "wheel" },
      t: 10,
      style: { fill: "#66CC69" },
    },
    {
      key: "sensor-5",
      value: { reading: 88, area: "wheel" },
      t: 27,
      style: { fill: "#66CC69" },
    },
    {
      key: "sensor-5",
      value: { reading: 91, area: "wheel" },
      t: 36,
      style: { fill: "#66CC69" },
    },
    {
      key: "sensor-5",
      value: { reading: 86, area: "engine" },
      t: 47,
      style: { fill: "#66CC69" },
    },
    {
      key: "sensor-5",
      value: { reading: 88, area: "engine" },
      t: 52,
      style: { fill: "#66CC69" },
    },
  ],
  [
    {
      key: "sensor-6",
      value: { reading: 67, area: "motor" },
      t: 11,
      style: { fill: "#00AFBA" },
    },
    {
      key: "sensor-6",
      value: { reading: 66, area: "engine" },
      t: 25,
      style: { fill: "#00AFBA" },
    },
    {
      key: "sensor-6",
      value: { reading: 65, area: "wheel" },
      t: 34,
      style: { fill: "#00AFBA" },
    },
    {
      key: "sensor-6",
      value: { reading: 60, area: "motor" },
      t: 41,
      style: { fill: "#00AFBA" },
    },
    {
      key: "sensor-6",
      value: { reading: 63, area: "engine" },
      t: 56,
      style: { fill: "#00AFBA" },
    },
  ],
  [
    {
      key: "sensor-7",
      value: { reading: 35, area: "engine" },
      t: 14,
      style: { fill: "#38CCED" },
    },
    {
      key: "sensor-7",
      value: { reading: 36, area: "motor" },
      t: 22,
      style: { fill: "#38CCED" },
    },
    {
      key: "sensor-7",
      value: { reading: 30, area: "wheel" },
      t: 35,
      style: { fill: "#38CCED" },
    },
    {
      key: "sensor-7",
      value: { reading: 31, area: "motor" },
      t: 40,
      style: { fill: "#38CCED" },
    },
    {
      key: "sensor-7",
      value: { reading: 36, area: "wheel" },
      t: 54,
      style: { fill: "#38CCED" },
    },
  ],
  [
    {
      key: "sensor-8",
      value: { reading: 94, area: "wheel" },
      t: 15,
      style: { fill: "#829494" },
    },
    {
      key: "sensor-8",
      value: { reading: 95, area: "wheel" },
      t: 20,
      style: { fill: "#829494" },
    },
    {
      key: "sensor-8",
      value: { reading: 99, area: "motor" },
      t: 33,
      style: { fill: "#829494" },
    },
    {
      key: "sensor-8",
      value: { reading: 94, area: "engine" },
      t: 46,
      style: { fill: "#829494" },
    },
    {
      key: "sensor-8",
      value: { reading: 97, area: "motor" },
      t: 53,
      style: { fill: "#829494" },
    },
  ],
];

const styles = {
  ...baseStyles,
  svg_width: 750,
  svg_height: 400,

  pq_width: 120,
  pq_height: 25,
  pq_margin_top: 20,
  pq_label_margin_left: 0,
  pq_label_margin_bottom: 10,

  coll_label_margin_bottom: 30,

  part_width: 90,
  part_height: 20,
  part_margin_bottom: 30,
  part_id_margin_left: -15,
  part_id_margin_top: 15,

  row_width: 8,
  row_height: 8,
  row_margin_left: 8,
  row_offset_right: 10,

  ms_px: 3.5,
};

export function add_xform_pq(s, name, partitions) {
  s.add_child(
    [
      {
        stream: "readings",
        partitions: partitions,
      },
    ],
    {
      name: name,
      kind: "persistent_query",
      into: "clean",
      query_text: [
        "CREATE STREAM clean AS",
        "    SELECT sensor,",
        "           reading,",
        "           UCASE(area) AS area",
        "    FROM readings",
        "    EMIT CHANGES;",
      ],
      select: function (context, row) {
        const { value } = row;

        const v = {
          reading: value.reading,
          area: value.area.toUpperCase(),
        };

        return { ...row, ...{ value: v } };
      },
    }
  );

  return s;
}

export function one_node(container) {
  const local_styles = {
    ...styles,
    ...{
      svg_height: 450,
    },
  };
  const s = new Specimen(container, local_styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions,
  });

  add_xform_pq(s, "pq1", [0, 1, 2, 3, 4, 5, 6, 7]);

  s.add_child(["pq1"], {
    name: "clean",
    kind: "stream",
    partitions: [[], [], [], [], [], [], [], []],
  });

  s.render();
}

export function two_nodes(container) {
  const local_styles = {
    ...styles,
    ...{
      svg_height: 450,
    },
  };
  const s = new Specimen(container, local_styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions,
  });

  add_xform_pq(s, "pq1(a)", [0, 1, 2, 3]);
  add_xform_pq(s, "pq1(b)", [4, 5, 6, 7]);

  s.add_child(["pq1(a)", "pq1(b)"], {
    name: "clean",
    kind: "stream",
    partitions: [[], [], [], [], [], [], [], []],
  });

  s.render();
}

export function eight_nodes(container) {
  const local_styles = {
    ...styles,
    ...{
      svg_width: 1050,
      svg_height: 750,
      svg_viewbox_offset_x: 70,
      part_margin_bottom: 60,
    },
  };
  const s = new Specimen(container, local_styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions,
  });

  add_xform_pq(s, "pq1(a)", [0]);
  add_xform_pq(s, "pq1(b)", [1]);
  add_xform_pq(s, "pq1(c)", [2]);
  add_xform_pq(s, "pq1(d)", [3]);
  add_xform_pq(s, "pq1(e)", [4]);
  add_xform_pq(s, "pq1(f)", [5]);
  add_xform_pq(s, "pq1(g)", [6]);
  add_xform_pq(s, "pq1(h)", [7]);

  s.add_child(
    [
      "pq1(a)",
      "pq1(b)",
      "pq1(c)",
      "pq1(d)",
      "pq1(e)",
      "pq1(f)",
      "pq1(g)",
      "pq1(h)",
    ],
    {
      name: "clean",
      kind: "stream",
      partitions: [[], [], [], [], [], [], [], []],
    }
  );

  s.render();
}

export function add_mv_pq(s, name, partitions) {
  s.add_child(
    [
      {
        stream: "readings",
        partitions: partitions,
      },
    ],
    {
      name: name,
      kind: "persistent_query",
      into: "changelog",
      query_text: [
        "CREATE TABLE avg_readings AS",
        "    SELECT sensor,",
        "           AVG(reading) AS avg",
        "    FROM readings",
        "    GROUP BY sensor",
        "    EMIT CHANGES;",
      ],
      select: function (context, row) {
        const { delta } = context;
        const { key, value } = row;

        const agg = delta[key];
        const avg = parseFloat((agg.sum / agg.n).toFixed(6));

        const v = {
          avg: avg,
        };

        return { ...row, ...{ value: v } };
      },
      aggregate: {
        init: function () {
          return {};
        },
        delta: function (state, row) {
          const { key } = row;
          const before = state[key] || { n: 0, sum: 0 };

          return {
            [key]: {
              n: before.n + 1,
              sum: before.sum + row.value.reading,
            },
          };
        },
        columns: [
          {
            name: "sensor",
            width: 11,
            lookup: (row) => row.key,
          },
          {
            name: "avg",
            width: 11,
            lookup: (row) => row.value.avg,
          },
        ],
      },
      style: {
        materialized_view_height: 80,
        fill: function (before_row, after_row) {
          return "#66CC69";
        },
      },
    }
  );
}

export function materialized_view(container) {
  const local_styles = {
    ...styles,
    ...{
      svg_width: 1050,
      svg_height: 800,
      svg_viewbox_offset_x: 70,
      pq_width: 195,
      part_margin_bottom: 60,
    },
  };
  const s = new Specimen(container, local_styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions,
  });

  add_mv_pq(s, "pq1(a)", [0, 1]);
  add_mv_pq(s, "pq1(b)", [2, 3]);
  add_mv_pq(s, "pq1(c)", [4, 5]);
  add_mv_pq(s, "pq1(d)", [6, 7]);

  s.add_child(["pq1(a)", "pq1(b)", "pq1(c)", "pq1(d)"], {
    name: "changelog",
    kind: "stream",
    partitions: [[], [], [], [], [], [], [], []],
  });

  s.render();
}

const replay_pq_text = [
  "CREATE TABLE avg_readings AS",
  "    SELECT sensor,",
  "           AVG(reading) AS avg",
  "    FROM readings",
  "    GROUP BY sensor",
  "    EMIT CHANGES;",
];

export function add_replay_pq(s, name, partitions, query = replay_pq_text) {
  s.add_child(
    [
      {
        stream: "changelog",
        partitions,
      },
    ],
    {
      name: name,
      kind: "persistent_query",
      query_text: query,
      select: function (context, row) {
        return row;
      },
      aggregate: {
        init: function () {
          return {};
        },
        delta: function (state, row) {
          const { key } = row;
          const after = row.value.avg;

          return {
            [key]: after,
          };
        },
        columns: [
          {
            name: "area",
            width: 11,
            lookup: (row) => row.key,
          },
          {
            name: "avg",
            width: 11,
            lookup: (row) => row.value.avg,
          },
        ],
      },
      style: {
        materialized_view_height: 80,
        fill: function (before_row, after_row) {
          return "#66CC69";
        },
      },
    }
  );
}

export function replay_changelog(container) {
  const local_styles = {
    ...styles,
    ...{
      svg_height: 800,
      pq_width: 195,
      part_margin_bottom: 60,
    },
  };
  const s = new Specimen(container, local_styles);

  const replay_partitions = [
    [
      {
        key: "sensor-1",
        value: { avg: 20 },
        t: 17,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-1",
        value: { avg: 24.5 },
        t: 23,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-1",
        value: { avg: 24 },
        t: 32,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-1",
        value: { avg: 25 },
        t: 44,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-1",
        value: { avg: 24.2 },
        t: 51,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-2",
        value: { avg: 64 },
        t: 12,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-2",
        value: { avg: 63 },
        t: 21,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-2",
        value: { avg: 64.666667 },
        t: 31,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-2",
        value: { avg: 63.75 },
        t: 43,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-2",
        value: { avg: 63.8 },
        t: 50,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-3",
        value: { avg: 46 },
        t: 13,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-3",
        value: { avg: 50 },
        t: 24,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-3",
        value: { avg: 48.333333 },
        t: 30,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-3",
        value: { avg: 49.5 },
        t: 45,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-3",
        value: { avg: 49.8 },
        t: 57,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-4",
        value: { avg: 16 },
        t: 16,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-4",
        value: { avg: 20 },
        t: 26,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-4",
        value: { avg: 19 },
        t: 37,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-4",
        value: { avg: 18.75 },
        t: 42,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-4",
        value: { avg: 20 },
        t: 55,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-5",
        value: { avg: 90 },
        t: 10,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-5",
        value: { avg: 89 },
        t: 27,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-5",
        value: { avg: 89.666667 },
        t: 36,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-5",
        value: { avg: 88.75 },
        t: 47,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-5",
        value: { avg: 88.6 },
        t: 52,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-6",
        value: { avg: 67 },
        t: 11,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-6",
        value: { avg: 66.5 },
        t: 25,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-6",
        value: { avg: 66 },
        t: 34,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-6",
        value: { avg: 64.5 },
        t: 41,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-6",
        value: { avg: 64.2 },
        t: 56,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-7",
        value: { avg: 35 },
        t: 14,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-7",
        value: { avg: 35.5 },
        t: 22,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-7",
        value: { avg: 33.666667 },
        t: 35,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-7",
        value: { avg: 33 },
        t: 40,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-7",
        value: { avg: 33.6 },
        t: 54,
        style: { fill: "#66CC69" },
      },
    ],
    [
      {
        key: "sensor-8",
        value: { avg: 94 },
        t: 15,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-8",
        value: { avg: 94.5 },
        t: 20,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-8",
        value: { avg: 96 },
        t: 33,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-8",
        value: { avg: 95.5 },
        t: 46,
        style: { fill: "#66CC69" },
      },
      {
        key: "sensor-8",
        value: { avg: 95.8 },
        t: 53,
        style: { fill: "#66CC69" },
      },
    ],
  ];

  s.add_root({
    name: "changelog",
    kind: "stream",
    partitions: replay_partitions,
  });

  add_replay_pq(s, "pq1(a)", [0, 1]);
  add_replay_pq(s, "pq1(b)", [2, 3]);
  add_replay_pq(s, "pq1(c)", [4, 5]);
  add_replay_pq(s, "pq1(d)", [6, 7]);

  s.render();
}

export function high_availability(container) {
  const local_styles = {
    ...styles,
    ...{
      svg_height: 800,
      svg_width: 850,
      svg_viewbox_offset_x: 40,
      pq_width: 180,
      part_margin_bottom: 60,
      d_row_enter_offset: 10,
    },
  };
  const s = new Specimen(container, local_styles);

  s.add_root({
    name: "readings",
    kind: "stream",
    partitions: input_partitions.slice(0, 4),
  });

  add_mv_pq(s, "pq1(a)", [0, 1]);
  add_mv_pq(s, "pq1(b)", [2, 3]);

  s.add_child(["pq1(a)", "pq1(b)"], {
    name: "changelog",
    kind: "stream",
    partitions: [[], [], [], []],
  });

  const query_text = ["[[ replica ]]"];

  add_replay_pq(s, "r-1 pq1(b)", [0, 1], query_text);
  add_replay_pq(s, "r-2 pq1(a)", [2, 3], query_text);

  s.render();
}
