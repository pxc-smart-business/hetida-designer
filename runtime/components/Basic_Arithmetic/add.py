from hetdesrun.component.registration import register
from hetdesrun.datatypes import DataType

import pandas as pd

# ***** DO NOT EDIT LINES BELOW *****
# These lines may be overwritten if input/output changes.
@register(inputs={"a": DataType.Any, "b": DataType.Any}, outputs={"sum": DataType.Any})
def main(*, a, b):
    """entrypoint function for this component

    Usage example:
    >>> main(
    ...     a = pd.Series(
    ...        {
    ...            "2019-08-01T15:20:12": 1.2,
    ...            "2019-08-01T15:44:12": None,
    ...            "2019-08-03T16:20:15": 0.3,
    ...            "2019-08-05T12:00:34": 0.5
    ...        }
    ...     ),
    ...    b = 5
    ... )["sum"]
    2019-08-01T15:20:12    6.2
    2019-08-01T15:44:12    NaN
    2019-08-03T16:20:15    5.3
    2019-08-05T12:00:34    5.5
    dtype: float64
    >>> main(a = pd.Series(
    ...        {
    ...            "2019-08-01T15:20:12": 1.2,
    ...            "2019-08-01T15:44:12": 7.0,
    ...            "2019-08-03T16:20:15": 0.3,
    ...            "2019-08-05T12:00:34": 0.5,
    ...        }
    ...    ),
    ...    b = pd.Series(
    ...        {
    ...            "2019-08-01T15:20:12": 2.2,
    ...            "2019-08-01T15:44:12": 3.3,
    ...            "2019-08-03T16:20:15": 4.4,
    ...            "2019-08-05T12:00:34": 5.5,
    ...        }
    ...    ),
    ... )["sum"]
    2019-08-01T15:20:12     3.4
    2019-08-01T15:44:12    10.3
    2019-08-03T16:20:15     4.7
    2019-08-05T12:00:34     6.0
    dtype: float64
    """
    # ***** DO NOT EDIT LINES ABOVE *****

    return {"sum": (a + b)}

