import Head from 'next/head'
import { useEffect } from 'react'
const MapPage = () => {
  useEffect(() => {
    // @ts-ignore

    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    }
    const map = new kakao.maps.Map(container, options)
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667)
    const marker = new kakao.maps.Marker({
      position: markerPosition
    })
    marker.setMap(map)
    // @ts-ignore
    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      const latlng = mouseEvent.latLng

      marker.setPosition(latlng)
    })
  }, [])

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=553eb7ecc2f9915f03890ff6539b13ae"
        ></script>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=553eb7ecc2f9915f03890ff6539b13ae&libraries=LIBRARY"
        ></script>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=553eb7ecc2f9915f03890ff6539b13ae&libraries=services"
        ></script>
      </Head>
      <div id="map" style={{ width: '500px', height: '400px' }}></div>
    </>
  )
}

export default MapPage
