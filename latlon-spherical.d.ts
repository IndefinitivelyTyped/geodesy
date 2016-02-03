declare class LatLonSpherical {
    constructor(lat: number, lon: number)
    distanceTo(point: LatLonSpherical, radius?: number): number
    bearingTo(point: LatLonSpherical): number
    finalBearingTo(point: LatLonSpherical): number
    midpointTo(point: LatLonSpherical): number
    destinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical
    intersection(point1: LatLonSpherical, bearing1: number, point2: LatLonSpherical, bearing2: number): LatLonSpherical
    rhumbDistanceTo(point: LatLonSpherical, radius?: number): number
    rhumbBearingTo(point: LatLonSpherical): number
    rhumbDestinationPoint(distance: number, bearing: number, radius?: number): LatLonSpherical
    //toCartesian(): Vector3D
}

export = LatLonSpherical
