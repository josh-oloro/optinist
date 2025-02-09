from studio.app.common.dataclass.timeseries import TimeSeriesData


class BehaviorData(TimeSeriesData):
    def __init__(self, data, std=None, index=None, file_name="behavior"):
        super().__init__(
            data=data,
            std=std,
            index=index,
            file_name=file_name,
        )
